export  const Contatos = {
    wa:"99999999999",
    cel:"9999999999",
    email:"test@test.com",
    msgwa:"Olá, vim pelo site. Gostaria de mais informações sobre os serviços oferecidos pela J&P Impressoras.",
    link_wa:"https://wa.me/55999999999",
    link_email:"mailto:test@test.com",
    link_tel:"tel:2199999999999",
    endereco:"Rua Exemplo, 123, Cidade Exemplo",
    mensagem_wa:"Olá, gostaria de mais informações sobre os seus serviços.",
    redes:{
        facebook:"https://www.facebook.com/",
        instagram:"https://www.instagram.com/",
        twitter:"https://twitter.com/",
        youtube:"https://www.youtube.com/",
        linkedin:"https://www.linkedin.com/"
    }


}

export interface formulario{
    nome:string;
    telefone:number;
    wa:boolean;
    email:string;
    servico:string;
}