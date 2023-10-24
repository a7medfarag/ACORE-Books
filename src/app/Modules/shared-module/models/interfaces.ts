import { FormControl } from "@angular/forms"
import { TuiDay } from "@taiga-ui/cdk"


export interface IData<T>{
  data: IDataBook <T>
}
export interface IDataBook<T>{
  Books: T[]
}
export interface IBooks{
  Title:string,
  Category:string,
  Author:string,
  ISBN:number,
  Version:string,
  Pages:number,
  ToRead:boolean,
  Brief:string,
  Price: number,
  Cover:string
}
export interface ICategory{
  data: {
    Categories:ICategoryType[]
  }
}
export interface ICategoryType{
  id: string,
  item:string
}
export interface IVersionType{
  id: string,
  item:string
}
export interface IVersions{
  data:{
    Version: IVersionType[]
  }
  
}
export type FormControlWrapper<T> = {
  [P in keyof T]: FormControl<T[P]>;
};
export interface IAddBook{
    Title: string, 
    Author: string, 
    Category: string, 
    Price: number, 
    Version: string, 
    OlderVersion: string, 
    Edition: string,
    ISBN: number, 
    Brief: string,
    Cover: string, 
    Date: string | TuiDay, 
}