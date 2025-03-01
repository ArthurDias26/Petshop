"use client"

import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FaDog, FaCat } from "react-icons/fa"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import dogEating from '../../../../public/imagens/dog-eating.png'
import Image from "next/image";
 
type TformPet ={
    type: string
    weight: string,
    age: string,
    activity: string
}
export default function PetForm() {

  const [petFood, setPetFood] = useState<number | null>(null)

const formSchema = z.object({
  type: z.enum(["dog", "cat"], {
    required_error: "Por favor, selecione uma opção.",
  }),
  weight: z.string().min(1, {
    message: "Por favor, preencha o peso para enviar",
  }),
  age: z.string().min(1, {
      message: "Por favor, preencha a idade para enviar",
  }),   
  activity: z
  .string({
    required_error: "Por favor, selecione uma opção.",
  }),
    
    })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      weight: "",
      type: undefined,
      activity: ""
    },
  })

  
  function onSubmit({ type, weight, age, activity }: TformPet){
    const peso = parseFloat(weight);
    const idade = parseInt(age);
  
    if (isNaN(peso) || isNaN(idade) || peso <= 0 || idade <= 0) {
      throw new Error("Peso e idade devem ser valores válidos.");
    }
  
    let quantidadeBase: number;
    
    if (type === "dog") {
      if (idade < 4) {
        quantidadeBase = peso * 0.20; 
      } else if (peso <= 11) {
        quantidadeBase = peso * 0.165;
      } else if (peso <= 25) {
        quantidadeBase = peso * 0.12;
      } else {
        quantidadeBase = peso * 0.10;
      }
    } else {
      if (idade < 4) {
        quantidadeBase = peso * 0.18; 
      } else if (peso <= 12) {
        quantidadeBase = peso * 0.15;
      } else {
        quantidadeBase = peso * 0.135;
      }
    }
  
    const fatorAtividade = {
      Baixa: 0.9,
      Moderada: 1.15,
      Alta: 1.3,
    }[activity];
  
    if (!fatorAtividade) {
      throw new Error("Nível de atividade inválido.");
    }
  
    setPetFood(Number((quantidadeBase * fatorAtividade * 100).toFixed(2)))
  }

    
  return (
    <section className="pt-12 pb-20 flex flex-col lg:flex-row justify-around items-center bg-[#FDF6ec] relative">
      <div className="w-[68%] md:w-[52%] lg:w-[38%] min-w-[300px] border-2 border-black py-4 px-12 rounded-2xl bg-white" data-aos="fade-rigth" data-aos-delay="150">

        <h2 className="text-xl sm:text-2xl font-bold text-center">Calculadora de Alimentação</h2>
        <p className="text-xs text-center mb-6 sm:text-sm">
          Você sabia que existe um cálculo correto da quantidade de alimento para seu Pet? Preencha a tabela e descubra!
          <br/>
          <strong>Seu pet é um:</strong>
        </p>

        <Form {...form}>
          <form  className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>

              <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex justify-center items-center gap-4 sm:gap-10"
                    >

                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl className="hidden">
                          <RadioGroupItem value="dog" />
                        </FormControl>
                        <FormLabel className={`font-normal border-2 border-black  rounded-lg select-none cursor-pointer`}>
                          <div className={`flex justify-center items-center py-2 w-24 border-b-2 border-black transition
                             ${field.value === 'dog' ? 'bg-[#1e293b] text-white' : ''}`}>
                            <FaDog className="text-4xl"/>
                          </div>
                          <p className={`font-bold p-1 transition duration-300 text-center
                             ${field.value === 'dog' ? 'bg-black text-white' : ''}`}>
                            CACHORRO
                          </p>
                        </FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl className="hidden">
                          <RadioGroupItem value="cat" />
                        </FormControl>
                        <FormLabel className={`font-normal border-2 border-black  rounded-lg select-none cursor-pointer`}>
                          <div className={`flex justify-center items-center w-24 py-2 border-b-2 border-black transition
                              ${field.value === 'cat' ? 'bg-[#1e293b] text-white' : ''}`}>
                            <FaCat className="text-[32px]"/>
                          </div>
                          <p className={`font-bold p-1 transition duration-300 text-center
                             ${field.value === 'cat' ? 'bg-black text-white' : ''}`}>
                            GATO
                          </p>
                        </FormLabel>
                      </FormItem>

                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Peso (kg)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} autoComplete="off" min={1} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Idade (messes)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} autoComplete="off" min={1}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          <FormField
          control={form.control}
          name="activity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nível de atividade física:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma opção..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem className="cursor-pointer hover:bg-gray-200" value="Baixa">Baixa</SelectItem>
                  <SelectItem className="cursor-pointer hover:bg-gray-200" value="Moderada">Moderada</SelectItem>
                  <SelectItem className="cursor-pointer hover:bg-gray-200" value="Alta">Alta</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-6 pb-2">
          {petFood ? (
            <p className="text-center text-[#efc435] text-lg font-bold">Serão necessários {petFood} gramas de ração díaria</p>
          ): (
            <p className="text-center text-gray-400 text-sm">Sua resposta será exibida aqui!</p>
            
          )}
        </div>
            
            <Button type="submit" className="bg-[#1e293b] text-white hover:bg-black block mx-auto transition duration-300">
              Submit
            </Button>
          </form>
        </Form>

      </div>


      <Image
        src={dogEating}
        alt="Foto de Cachorro"
        className="object-contain w-[30%] min-w-[150px]"
        data-aos="fade-left" 
        data-aos-delay="150"
      />
    </section>
  )
}