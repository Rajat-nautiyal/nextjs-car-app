"use client"
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {yearsOfProduction} from '@/constants'

interface yearProp{
  yearValue: string;
  setYearValue: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomFilter = ({yearValue,setYearValue}:yearProp) => {
  return (
    <Select >
      <SelectTrigger>
        <SelectValue placeholder="choose a minimum year" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Year</SelectLabel>
        {yearsOfProduction?.map((year:string,index:number)=>(
          <SelectItem key={index} value={year} onClick={()=>setYearValue(year)}>{year}</SelectItem>
        ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
