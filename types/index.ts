export interface CustomButtonProps{
    title:string;
    fontStyle?:string;
    containerStyle?:string;
    handleClick?: ()=>void;
}
export interface optionProps{
    title:string;
    url:string;
}
export interface footerLinkProps{
    title:string;
    links:optionProps[];
}[]
export interface fetchDataProps{
    bodyType?:string;
    model?: string;
    mileage?:string;
    photoUrls?:string[];
    make?:string;
    year?:number;
    price?:string;
    displayColor?:string;
    dealerName?:string;
}