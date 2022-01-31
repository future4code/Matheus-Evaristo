import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ProfilePic from './img/profilepic.jpg'
import iconeEmail from './img/emailicon.png'
import iconeEndereco from './img/adressicon.png'


function App() {
  

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ProfilePic} 
          nome="Matheus Bezerra Evaristo" 
          descricao="Oi, Eu sou Matheus. Sou Formado em Tradução - Inglês, possuo experiência com marketing digital na área do tráfego pago e hoje sou um desenvolvedor em desenvolvimento."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Tráfego Pago | Google Ads | Facebook Ads | Freelancer |" 
          descricao="Impulsionamento de publicações, criação de leads, trazer tráfego para websites" 
        />
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Livraria Cultura" 
          descricao="Vendedor" 
        />
        
  
      </div>

      <div className="page-section-container">
          
          <CardPequeno
          imagem1={iconeEmail}
          email="mat.evaristo@gmail.com"
          imagem2={iconeEndereco}
          endereco= "SMPW Quadra 1 Conjunto 3 Lote5 Casa C - Brasília - Distrito Federal"
               
          />


      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
