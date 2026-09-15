import "./Card.css";
import "./CardMobile.css";
import macDallasGreen from "../../assets/products/dallas-espaguete-green-500g.png";
import mistBoloDallas from "../../assets/products/mistura-bolo-dallas-400g.png";
import cafeFort from "../../assets/products/cafe-fort-pack-500g.png";
import ervaFront from "../../assets/products/erva-mate-fronteira-trad-500g.png";
import trigoDallas from "../../assets/products/trigo-dallas-1kg.png";
import batataAmarelinha from "../../assets/products/batata-palha-amarelinha-200g.jpeg";
import biscDallas from "../../assets/products/biscoito-dallas-345g.jpeg";
import rosqDallas from "../../assets/products/rosquinha-dallas-300g.jpeg";
import biscRechDallas from "../../assets/products/biscoito-recheado-dallas-120g.jpeg";
import fermDROetker from "../../assets/products/fermento-droetker-200g.jpeg";
import achocNescau from "../../assets/products/achocolatado-nescau-2010g.jpeg";
import milhoVeFugini from "../../assets/products/milho-verde-fugini-170g.jpeg";
import molhoTomFugini from "../../assets/products/molho-tomate-fugini-300g.jpeg";
import batataFreetaz from "../../assets/products/batata-palha-freetaz-1kg.png";
import tempSazon from "../../assets/products/tempero-sazon-60g.png";
import tempKazam from "../../assets/products/tempero-kazam-300g.png";
import miojoNissin from "../../assets/products/miojo-nissin-80g.png";
import gelatinaDROetker from "../../assets/products/gelatinha-dr-oetker-20g.png";
import salgKro from "../../assets/products/salgadinho-kro-100g.png";
import balaFini from "../../assets/products/bala-gelatina-fini.png";
import margSalClaybom from "../../assets/products/margarina-c-sal-claybom-500g.png";
import reqTradAurora from "../../assets/products/requeijao-trad-aurora-200g.png";

function Card() {
  return (
    <>
      <div className="card-group">
        <div className="card-container">
          <div className="card-img">
            <img
              src={macDallasGreen}
              alt="Macarrão Dallas Espaguete Green de 500 gramas"
            />
          </div>
          <div className="card-price">R$2,89</div>
          <div className="card-name">
            <p>MACARRÃO ESPAGUETE</p>
            <p>DALLAS GREEN 500g</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={mistBoloDallas} alt="Mistura Bolo Dallas de 400 gramas" />
          </div>
          <div className="card-price">R$4,89</div>
          <div className="card-name">
            <p>MISTURA BOLO</p>
            <p>DALLAS 400G (SABORES)</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={cafeFort} alt="Pacote do Café Fort Pack de 500 gramas" />
          </div>
          <div className="card-price">R$19,90</div>
          <div className="card-name">
            <p>CAFÉ FORT</p>
            <p>PACK 500g</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img
              src={ervaFront}
              alt="Erva Mate Fronteira Tradicional de 500 gramas"
            />
          </div>
          <div className="card-price">R$3,19</div>
          <div className="card-name">
            <p>ERVA MATE FRONTEIRA</p>
            <p>TRADICIONAL 500G</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={trigoDallas} alt="Farinha Trigo Dallas de 1kg" />
          </div>
          <div className="card-price">R$3,59</div>
          <div className="card-name">
            <p>FARINHA TRIGO</p>
            <p>DALLAS 1KG</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img
              src={batataAmarelinha}
              alt="Batata Palha Jumbitos Amarelinha 200g"
            />
          </div>
          <div className="card-price">R$8,69</div>
          <div className="card-name">
            <p>BATATA PALHA JUMBITOS</p>
            <p>AMARELINHA 200G</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={biscDallas} alt="Biscoito Dallas 345g" />
          </div>
          <div className="card-price">R$4,39</div>
          <div className="card-name">
            <p>BISCOITO DALLAS</p>
            <p>345G (LAMINADOS)</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={rosqDallas} alt="Biscoito Rosquinha Dallas de 300g" />
          </div>
          <div className="card-price">R$3,99</div>
          <div className="card-name">
            <p>BISCOITO ROSQUINHAS</p>
            <p>DALLAS 300G (SABORES)</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img
              src={biscRechDallas}
              alt="Biscoito Recheado Dallas Radical de 120g"
            />
          </div>
          <div className="card-price">R$1,59</div>
          <div className="card-name">
            <p>BISCOITO RECHEADO DALLAS</p>
            <p>RADICAL 120G</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={fermDROetker} alt="Fermento Químico Dr. Oetker 100g" />
          </div>
          <div className="card-price">R$4,39</div>
          <div className="card-name">
            <p>FERMENTO QUÍMICO</p>
            <p>DR. OETKER 100G</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img
              src={achocNescau}
              alt="Achocolatado em Pó Nescau Sache de 2,010 quilos"
            />
          </div>
          <div className="card-price">R$45,99</div>
          <div className="card-name">
            <p>ACHOCOLATADO PÓ</p>
            <p>NESCAU SACHE 2,01KG</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img
              src={milhoVeFugini}
              alt="Milho Verde Fugini Sache de 170 gramas"
            />
          </div>
          <div className="card-price">R$2,79</div>
          <div className="card-name">
            <p>MILHO VERDE</p>
            <p>FUGINI SACHE 170G</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img
              src={molhoTomFugini}
              alt="Molho de Tomate Fugini Tradicional de 300 gramas"
            />
          </div>
          <div className="card-price">R$1,69</div>
          <div className="card-name">
            <p>MOLHO TOMATE FUGINI</p>
            <p>TRADICIONAL 300G</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={batataFreetaz} alt="Batata Palha Freetaz de 1 quilo" />
          </div>
          <div className="card-price">R$34,59</div>
          <div className="card-name">
            <p>BATATA PALHA</p>
            <p>FREETAZ 1KG</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={tempSazon} alt="Tempero Sazon de 60 gramas" />
          </div>
          <div className="card-price">R$4,99</div>
          <div className="card-name">
            <p>TEMPERO SAZON</p>
            <p>60G (SABORES)</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={tempKazam} alt="Tempero Kazam de 300 gramas" />
          </div>
          <div className="card-price">R$1,89</div>
          <div className="card-name">
            <p>TEMPERO KAZAM</p>
            <p>300G (SABORES)</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img
              src={miojoNissin}
              alt="MIOJO - Macarrão Instantâneo Nissin de 80 gramas"
            />
          </div>
          <div className="card-price">R$2,39</div>
          <div className="card-name">
            <p>MACARRÃO INSTANTÂNEO</p>
            <p>NISSIN 80G (SABORES)</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={gelatinaDROetker} alt="Gelatina Dr. Oetker 20 gramas" />
          </div>
          <div className="card-price">R$1,89</div>
          <div className="card-name">
            <p>GELATINA DR. OETKER</p>
            <p>20G (SABORES)</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={salgKro} alt="Salgadinho Kró de 100 gramas" />
          </div>
          <div className="card-price">R$3,09</div>
          <div className="card-name">
            <p>SALGADINHO KRÓ</p>
            <p>100G (SABORES)</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img src={balaFini} alt="Bala de Gelatina Fini de 80g a 90g" />
          </div>
          <div className="card-price">R$5,99</div>
          <div className="card-name">
            <p>BALAS GELATINA FINI</p>
            <p>80G/ 90G (SABORES)</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img
              src={margSalClaybom}
              alt="Margarina com sal pote claybom de 500 gramas"
            />
          </div>
          <div className="card-price">R$5,09</div>
          <div className="card-name">
            <p>MARGARINA COM SAL</p>
            <p>CLAYBOM POTE 500G</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card-img">
            <img
              src={reqTradAurora}
              alt="Requeijão tradicional copo Aurora de 200 gramas"
            />
          </div>
          <div className="card-price">R$6,59</div>
          <div className="card-name">
            <p>REQUEIJÃO CREMOSO TRADICIONAL</p>
            <p>AURORA COPO 200G</p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Card;
