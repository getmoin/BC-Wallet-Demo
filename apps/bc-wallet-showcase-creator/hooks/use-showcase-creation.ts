import { useState, useCallback } from "react";
import { useShowcaseStore } from "@/hooks/use-showcases-store";
import { 
  Persona, 
  ScenarioRequestType, 
  StepRequestType,
  AriesOOBActionRequest,
  IssuanceScenarioRequestType,
} from "@/openapi-types";
import { sampleAction } from "@/lib/steps";
import { useHelpersStore } from "@/hooks/use-helpers-store";

export const useShowcaseCreation = () => {
  const { 
    displayShowcase, 
    selectedPersonaIds,
  } = useShowcaseStore();

  const { issuerId, selectedCredentialDefinitionIds } = useHelpersStore();
  const [personaScenarios, setPersonaScenarios] = useState(() => {
    const initialScenarios = new Map<string, IssuanceScenarioRequestType>();
    
    const personas = (displayShowcase.personas || []).filter(
      (persona: Persona) => selectedPersonaIds.includes(persona.id)
    );
    
    personas.forEach((persona: Persona) => {
      initialScenarios.set(persona.id, {
        name: `${persona.name}'s Journey`,
        description: `Onboarding scenario for ${persona.name}`,
        type: "ISSUANCE",
        steps: [
          {
            title: `Meet ${persona.name}`,
            description: `Welcome to this showcase. Here you'll learn about digital credentials with ${persona.name}.`,
            order: 0,
            type: "HUMAN_TASK",
            actions: [
              sampleAction,
            ]
          }
        ],
        personas: [persona.id],
        hidden: false,
        issuer: issuerId
      });
    });
    
    return initialScenarios;
  });
  
  const [activePersonaId, setActivePersonaId] = useState<string | null>(() => {
    const personas = (displayShowcase.personas || []).filter(
      (persona: Persona) => selectedPersonaIds.includes(persona.id)
    );
    return personas.length > 0 ? personas[0].id : null;
  });
  
  const selectedPersonas = (displayShowcase.personas || []).filter(
    (persona: Persona) => selectedPersonaIds.includes(persona.id)
  );
  
  const updatePersonaSteps = useCallback((personaId: string, steps: StepRequestType[]) => {
    setPersonaScenarios(prevScenarios => {
      if (!prevScenarios.has(personaId)) {
        return prevScenarios;
      }
      
      const newScenarios = new Map(prevScenarios);
      newScenarios.set(personaId, {
        ...prevScenarios.get(personaId)!,
        steps: steps
      });
      
      return newScenarios;
    });
  }, []);
  
  const addActionToStep = useCallback((
    personaId: string, 
    stepIndex: number, 
    action: typeof AriesOOBActionRequest._type
  ) => {
    setPersonaScenarios(prevScenarios => {
      if (!prevScenarios.has(personaId)) {
        return prevScenarios;
      }
      
      const scenario = prevScenarios.get(personaId)!;
      const steps = [...scenario.steps];
      
      if (stepIndex < 0 || stepIndex >= steps.length) {
        return prevScenarios;
      }
      
      const step = steps[stepIndex];
      const actions = [...(step.actions || []), action];
      
      steps[stepIndex] = { ...step, actions };
      
      const newScenarios = new Map(prevScenarios);
      newScenarios.set(personaId, {
        ...scenario,
        steps: steps
      });
      
      return newScenarios;
    });
  }, []);
  
  const addPersonaScenario = useCallback((persona: Persona) => {
    setPersonaScenarios(prevScenarios => {
      if (prevScenarios.has(persona.id)) {
        return prevScenarios;
      }
      
      const defaultScenario: ScenarioRequestType = {
        name: `${persona.name}'s Journey`,
        description: `Onboarding scenario for ${persona.name}`,
        type: "ISSUANCE",
        steps: [
          {
            title: `Meet ${persona.name}`,
            description: `Welcome to this showcase. Here you'll learn about digital credentials with ${persona.name}.`,
            order: 0,
            type: "HUMAN_TASK",
            actions: []
          }
        ],
        personas: [persona.id],
        hidden: false,
        issuer: issuerId
      };
      
      const newScenarios = new Map(prevScenarios);
      newScenarios.set(persona.id, defaultScenario as IssuanceScenarioRequestType);
      return newScenarios;
    });
  }, []);

  return {
    selectedPersonas,
    selectedCredentialDefinitionIds,
    personaScenarios,
    activePersonaId,
    setActivePersonaId,
    updatePersonaSteps,
    addActionToStep,
    addPersonaScenario,
    // completeShowcaseCreation,
    // isSaving: createIssuanceScenario.isPending
  };
};