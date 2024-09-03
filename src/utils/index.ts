export const createFormatter = (currency: string) =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0, // Ajusta según la cantidad de decimales que quieras mostrar
    maximumFractionDigits: 2,
  })


export const copFormatter = createFormatter('COP')
export const usdFormatter = createFormatter('USD')