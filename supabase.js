import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm' 

const SUPABASE_URL = "https://jcxjosgsnqkbhrwzegae.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjeGpvc2dzbnFrYmhyd3plZ2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NzUyMDUsImV4cCI6MjA5MDU1MTIwNX0.-Ff2fZRfo2OYiz_XbXcCtC4srwfLJO5PY8y_TzkDGjc"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const paciente = {
        nome: document.getElementById("idNome").value,
        telefone: document.getElementById("idTelefone").value,
        email: document.getElementById("idEmail").value
    }

    if(![paciente]){
        alert("Digite os valores");
    }

    try {
        const { data, error } = await supabase
            .from("paciente")
            .insert({
                NOME: paciente.nome,
                CELULAR: paciente.telefone,
                EMAIL: paciente.email
            });
        
        if(error){
            console.log("ERRO: ", error);
            alert("Erro ao cadastrar paciente");
        }

        alert("Paciente Cadastrado com Sucesso!");
        return data;

    } catch (error) {
        console.log("ERRO: ", error);
    }
});