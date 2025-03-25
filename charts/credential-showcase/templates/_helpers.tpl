{{/*
Expand the name of the chart.
*/}}
{{- define "bc-wallet.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "bc-wallet.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "bc-wallet.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "bc-wallet.labels" -}}
helm.sh/chart: {{ include "bc-wallet.chart" . }}
{{ include "bc-wallet.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "bc-wallet.selectorLabels" -}}
app.kubernetes.io/name: {{ include "bc-wallet.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Returns a secret if it already exists in Kubernetes, otherwise creates
it randomly.
*/}}
{{- define "getOrGeneratePass" -}}
{{- $len := (default 16 .Length) | int -}}
{{- $obj := (lookup "v1" .Kind .Namespace .Name).data -}}
{{- if $obj }}
{{- index $obj .Key -}}
{{- else if (eq (lower .Kind) "secret") -}}
{{- randAlphaNum $len | b64enc -}}
{{- else -}}
{{- randAlphaNum $len -}}
{{- end -}}
{{- end }}

{{/*
Define database secret name - used to reference PostgreSQL generated secret
*/}}
{{- define "bc-wallet.database.secret.name" -}}
{{- if .Values.postgresql.auth.existingSecret -}}
    {{- .Values.postgresql.auth.existingSecret -}}
{{- else -}}
    {{- printf "%s-postgresql" .Release.Name -}}
{{- end -}}
{{- end -}}

{{/*
Get the admin-password key.
*/}}
{{- define "bc-wallet.database.adminPasswordKey" -}}
{{- if .Values.postgresql.auth.secretKeys.adminPasswordKey -}}
    {{- printf "%s" (tpl .Values.postgresql.auth.secretKeys.adminPasswordKey $) -}}
{{- else -}}
    {{- printf "postgres-password" -}}
{{- end -}}
{{- end -}}

{{/*
Get the user-password key.
*/}}
{{- define "bc-wallet.database.userPasswordKey" -}}
{{- if .Values.postgresql.auth.secretKeys.userPasswordKey -}}
    {{- printf "%s" (tpl .Values.postgresql.auth.secretKeys.userPasswordKey $) -}}
{{- else -}}
    {{- printf "password" -}}
{{- end -}}
{{- end -}}

{{/*
Create a default fully qualified rabbitmq name.
*/}}
{{- define "bc-wallet.rabbitmq.secret.name" -}}
{{- printf "%s-rabbitmq" .Release.Name -}}
{{- end -}}

{{/*
Get the rabbitmq password key.
*/}}
{{- define "bc-wallet.rabbitmq.passwordKey" -}}
{{- if .Values.rabbitmq.auth.secretKeys.passwordKey -}}
{{- printf "%s" .Values.rabbitmq.auth.secretKeys.passwordKey -}}
{{- else -}}
rabbitmq-password
{{- end -}}
{{- end -}}

{{/*
Get the rabbitmq erlang cookie key.
*/}}
{{- define "bc-wallet.rabbitmq.erlangCookieKey" -}}
{{- if .Values.rabbitmq.auth.secretKeys.erlangCookieKey -}}
{{- printf "%s" .Values.rabbitmq.auth.secretKeys.erlangCookieKey -}}
{{- else -}}
rabbitmq-erlang-cookie
{{- end -}}
{{- end -}}

{{/*
Define a FIXED auth token secret name that can be shared between frontend and backend
*/}}
{{- define "bc-wallet.authtoken.secret.name" -}}
showcase-authtoken
{{- end -}}

{{/* 
Generate api-server openshift route tls config
*/}}
{{- define "bc-wallet.api-server.openshift.route.tls" -}}
{{- if (.Values.api_server.openshift.route.tls.enabled) -}}
tls:
  insecureEdgeTerminationPolicy: {{ .Values.api_server.openshift.route.tls.insecureEdgeTerminationPolicy }}
  termination: {{ .Values.api_server.openshift.route.tls.termination }}
{{- end -}}
{{- end -}}

{{/*
Generate traction-adapter openshift route tls config
*/}}
{{- define "bc-wallet.traction-adapter.openshift.route.tls" -}}
{{- if (.Values.traction_adapter.openshift.route.tls.enabled) -}}
tls:
  insecureEdgeTerminationPolicy: {{ .Values.traction_adapter.openshift.route.tls.insecureEdgeTerminationPolicy }}
  termination: {{ .Values.traction_adapter.openshift.route.tls.termination }}
{{- end -}}
{{- end -}}

{{/*
API Server Route Host
*/}}
{{- define "bc-wallet.api-server.host" -}}
{{- if .Values.api_server.openshift.route.host -}}
{{- .Values.api_server.openshift.route.host -}}
{{- else -}}
{{- if .Values.openshift.routeSuffix -}}
{{- printf "%s-%s.%s" .Release.Name "api" .Values.openshift.routeSuffix -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name "api" -}}
{{- end -}}
{{- end -}}
{{- end -}}

{{/*
Traction Adapter Route Host
*/}}
{{- define "bc-wallet.traction-adapter.host" -}}
{{- if .Values.traction_adapter.openshift.route.host -}}
{{- .Values.traction_adapter.openshift.route.host -}}
{{- else -}}
{{- if .Values.openshift.routeSuffix -}}
{{- printf "%s-%s.%s" .Release.Name "traction" .Values.openshift.routeSuffix -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name "traction" -}}
{{- end -}}
{{- end -}}
{{- end -}} 