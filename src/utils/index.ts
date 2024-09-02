export const formatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0, // Ajusta según la cantidad de decimales que quieras mostrar
  maximumFractionDigits: 2
})