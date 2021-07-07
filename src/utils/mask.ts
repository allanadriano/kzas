export const maskCPF = (cpf: string): string => {
  if (cpf) {
    return cpf
      .toString()
      .replace(/[\D]/g, '')
      .replace(/([\d]{0,3})([\d]{0,3})([\d]{0,3})([\d]{0,2})/g, '$1.$2.$3-$4')
      .replace(/[\D]{1,}$/g, '')
      .slice(0, 14)
  }
  return cpf
}

export const maskPhone = (phone: string): string => {
  if (phone) {
    return phone
      .toString()
      .replace(/[\D]/g, '')
      .replace(/([\d]{0,2})([\d]{0,1})([\d]{0,4})([\d]{0,4})/g, '($1) $2 $3-$4')
      .replace(/[\D]{1,}$/g, '')
      .slice(0, 16)
  }
  return phone
}