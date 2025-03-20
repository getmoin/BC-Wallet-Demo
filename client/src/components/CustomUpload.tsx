import { useEffect, useState } from 'react'

import { useAppDispatch } from '../hooks/hooks'
import { useCharacters } from '../slices/characters/charactersSelectors'
import { setUploadingStatus, uploadCharacter } from '../slices/characters/charactersSlice'
import { useShowcases } from '../slices/showcases/showcasesSelectors'
import { uploadShowcase, setUploadingStatus } from '../slices/showcases/showcasesSlice'
import { toggleCharacterUpload } from '../slices/preferences/preferencesSlice'
import type { CustomCharacter } from '../slices/types'
import { Modal } from './Modal'

export const CustomUpload: React.FC = () => {
  const dispatch = useAppDispatch()
  const [uploadFile, setUploadFile] = useState<any>()
  const { isUploading } = useShowcases()
  const [uploadPressed, setUploadPressed] = useState<boolean>(false)

  const onChangeHandler = (event: any) => {
    setUploadFile(event.target.files[0])
  }

  const onSubmitHandler = () => {
    setUploadPressed(true)
    const reader = new FileReader()
    reader.onload = (evt: any) => {
      const uploadedChar: CustomCharacter = JSON.parse(evt.target.result)
      dispatch(
          uploadShowcase({
          showcase: uploadedChar,
          callback: () => {
            dispatch(setUploadingStatus(false))
          },
        })
      )
    }
    reader.readAsText(uploadFile)
  }

  const close = () => {
    setUploadPressed(false)
    dispatch(toggleCharacterUpload())
    dispatch(setUploadingStatus(false))
  }

  useEffect(() => {
    if (!isUploading && uploadPressed) {
      close()
    }
  }, [isUploading])

  return (
    <>
      <Modal
        title="Upload custom character"
        onOk={onSubmitHandler}
        okText="UPLOAD"
        okDisabled={!uploadFile}
        loading={isUploading}
        loadingText="Adding new schemas and credential defenitions to the ledger. Please be patient, this can take a few minutes."
        onCancel={close}
        description=""
      >
        <input type="file" accept=".json" onChange={onChangeHandler} />
      </Modal>
    </>
  )
}
