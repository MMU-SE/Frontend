/* eslint-disable react-hooks/exhaustive-deps */
import { OpenAPI, InventoryManagerAPI } from 'api'
import { useMemo } from 'react'

const useApi = (): InventoryManagerAPI =>
	useMemo(() => new InventoryManagerAPI(OpenAPI), [])

export default useApi
