export const validation = (value) => {
    if(value.phonNumber > 0 && value.phonNumber.match('/^\d{10}$/')) return 'valid';
}