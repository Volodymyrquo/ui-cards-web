import { InferActionTypes } from "..";
import {
  GET_CARDS_TYPES,
  GET_CARDS_TYPES_SUCCESS,
  GET_FIELDS_SUCCESS,
  IS_FETCHING
} from "./actionTypes"
import { TypesType, FieldsType } from "./reducer";

export type CardsTypesActionType = InferActionTypes<typeof actions>


const actions = {
  getCardsTypes :() => ({
    type: GET_CARDS_TYPES
  } as const),
  
  getCardsTypesSuccess :(cardTypes:Array<TypesType>) => ({
    type: GET_CARDS_TYPES_SUCCESS,
    payload: cardTypes
  } as const ),
  
  getFieldsSuccess :(fields:Array<FieldsType>) => ({
    type: GET_FIELDS_SUCCESS,
    payload: fields,
  } as const ),
  toggleIsFetcing :(isFetchig:boolean) => ({
    type: IS_FETCHING,
    payload: isFetchig,
  } as const )
  

}

export const {getCardsTypes, getCardsTypesSuccess, getFieldsSuccess,toggleIsFetcing} = actions
