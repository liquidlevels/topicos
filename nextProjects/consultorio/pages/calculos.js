import React, {useState} from 'react'
import  {useForm}  from '@mantine/form';
import { Text, Title } from '@mantine/core';
import { TextInput, Button, Group, Box } from '@mantine/core';
import AppShellDemo from '../components/AppShellDemo'

const calculos = () => {

  const form = useForm({
    initialValues: {
      peso: '',
      talla: '',
      resultado: '',
      imc: ''
    }
  })

  const [resultado, setResultado] = useState('')
  const [imc, setIMC] = useState('')

  const calcularIMC = () => {

    let altura_cm = 0
    let cm = 100
    
    altura_cm = form.getInputProps('talla').value / cm
    resultado = form.getInputProps('peso').value / ( altura_cm * altura_cm )

    console.log(resultado)       

    return resultado
  }

  const validarIMC = () => {
    
    if( resultado < 16){
      imc = 'Delgadez Severa'
    }
    else if( resultado > 16 && resultado < 17 ){
      imc = 'Delgadez Moderada'
    }
    else if( resultado > 17 && resultado < 18.5 ){
      imc = 'Delgadez Normal'
    }
    else if( resultado > 18.5 && resultado < 25 ){
      imc = 'Normal'
    }
    else if( resultado > 25 && resultado < 30 ){
      imc = 'Sobrepeso'
    }
    else if( resultado > 30 && resultado < 35 ){
      imc = 'Obesidad Tipo I'
    }
    else if( resultado > 35 && resultado < 40 ){
      imc = 'Obesidad Tipo II'
    }
    else if( resultado > 40 ){
      imc = 'Obesidad Tipo III'
    }
    
    console.log(imc)

    return imc

  }

  const llamarDoble = () => {
    setResultado(calcularIMC)
    setIMC(validarIMC)
  }

  return (
    <AppShellDemo>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <form>

          <Title align='center'>Calculo de IMC</Title>
          
          <TextInput
            label="Peso"
            placeholder='peso en kg'
            {...form.getInputProps('peso')}
          />
          
          <TextInput
            label="Talla"
            placeholder='altura en m'
            {...form.getInputProps('talla')}
          />

          <Group position="right" mt="md">
            <Button color='dark' onClick={ () => llamarDoble()}>Calcular</Button>
          </Group>

          <Text size="sm">{resultado}</Text>
          <Text size="sm">{imc}</Text>

        </form>
      </Box>
    </AppShellDemo>
  )
}

export default calculos