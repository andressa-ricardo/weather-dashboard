# 🌦️ Tempo Certo

**Tempo Certo** é um painel moderno e responsivo de meteorologia construído com **React + TypeScript + TailwindCSS**, que consome a API pública do **OpenWeather** para exibir informações em tempo real sobre o clima em qualquer cidade do mundo.  

O projeto inclui recursos avançados como:
- 🔍 **Busca inteligente de cidades** com autocomplete  
- 🌍 **Suporte global** (não limitado ao Brasil)  
- 📊 **Gráficos de temperatura, vento e nuvens**  
- 💬 **Mensagens de erro amigáveis e traduzidas para português**  
- 🎨 **Interface moderna e responsiva inspirada em dashboards profissionais**  


## 🚀 Tecnologias Utilizadas

- ⚛️ **React** + **Vite**  
- 💬 **TypeScript**  
- 🎨 **TailwindCSS**  
- ☁️ **OpenWeather API**  
- 🧭 **Lucide Icons**  
- 📦 **Axios**

---

## 🛠️ Como Rodar o Projeto

## Instalação

1. **Clone o repositório**
   ```sh
   git clone https://github.com/seu-usuario/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Instale as dependências**
   ```sh
   npm install || yarn install
   ```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do OpenWeather:
   ```env
   OPENWEATHER_API_KEY=SEU_API_KEY_AQUI
   ```

## Obtendo a API Key do Open Weather
Para utilizar a API, é necessário obter uma API Key do site. Siga os passos abaixo:

1. **Acesse o site**
   - Vá para https://openweathermap.org/ e crie uma conta caso ainda não tenha uma.

2. **Cadastre-se ou faça login**
   - Se já tiver uma conta, basta fazer login. Caso contrário, clique em "Registrar" e siga o processo de cadastro.

3. **Obtenha sua API Key**
   - Após o login, vá para a seção "My profile" ou "My API Keys" no painel do usuário.
   - Clique em "Gerar nova chave" e copie o código gerado.

4. **Configure no projeto**
   - No arquivo `.env`, substitua `VITE_OPENWEATHER_KEY` pela chave gerada.

## Rodando a Aplicação

### Rodando Localmente
```sh
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`.


## Autor

- **LinkedIn:** [Andressa Ricardo](https://www.linkedin.com/in/andressa-ricardo/)
- **GitHub:** [andressa-ricardo](https://github.com/andressa-ricardo)