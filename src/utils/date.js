export function dateFormat(date){
  if (!date) return '-';
  return new Date(date).toLocaleDateString('en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
}