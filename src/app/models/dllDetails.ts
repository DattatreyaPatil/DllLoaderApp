export interface DynamicDllDetailsModel { 
    dllName :string ;
    dllFullPath?: string;
    dllDeatils?: DllClassesAndTheirMethods[]; 
}



export interface DllClassesAndTheirMethods 
{
     declaredClass :string;
     declaredMethodsOfClass :string[];
}
