module.exports = {
  async store(request, response) {
    const { numBinario } = request.body;
    
    if (numBinario.match(/^[0-1]+$/g) === null) {
     return response.json({ Erro : "Somente 0's e 1's"})
    }
    
    const decimal = await parseInt(numBinario, 2);
    return response.json({resultado: decimal, Erro: ""});
  }
}