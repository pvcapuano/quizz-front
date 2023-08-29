import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-10 flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row justify-around items-center bg-white rounded-xl shadow-xl p-8 w-full md:w-4/5 mb-10">
        <div className="w-2/5">
          <h1 className="text-2xl text-slate-800 text-left font-bold my-8">
            Sobre a prova:
          </h1>
          <p className="text-sm md:text-md text-justify mb-10">
            A certificação AWS Certified Cloud Practitioner valida uma
            compreensão profunda e abrangente dos serviços, terminologia e
            infraestrutura de computação em nuvem da AWS. Essa certificação é
            especialmente indicada para aqueles que estão começando sua
            trajetória de certificação na AWS e que não possuem experiência
            prévia em tecnologia da informação ou computação em nuvem. Ela
            oferece uma base sólida para os indivíduos que desejam adentrar o
            mundo da nuvem, fornecendo os conhecimentos essenciais para
            construir uma carreira de sucesso nesse campo.
          </p>
        </div>
        <div className="w-2/5 flex flex-col justify-between items-center">
          <h1 className="text-2xl text-center font-bold mb-4">
            Teste seus conhecimentos com o nosso simulado
          </h1>

          <Link
            to="/login"
            className="bg-slate-800 p-4 rounded-xl text-center uppercase font-bold text-slate-100 w-full"
          >
            <a>SIMULADO</a>
          </Link>
        </div>
      </div>
      <div className="flex w-4/5 justify-start">
        <h1 className="text-2xl text-slate-800 text-left font-bold my-8">
          Materiais úteis:
        </h1>
      </div>
      <div className="flex justify-between flex-col md:flex-row w-4/5">
        <div className="bg-slate-800 flex flex-col my-4 md:my-0 justify-between items-center text-slate-100 rounded-xl p-6 shadow-xl min-w-[180px] min-h-[280px] md:w-[20%]">
          <h1 className="uppercase  font-bold">Guia do exame</h1>
          <p>Edital oficial da AWS sobre a prova.</p>
          <a
            target="_blank"
            href="https://d1.awsstatic.com/pt_BR/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf"
            className="bg-amber-500 rounded-xl p-2 w-full cursor-pointer text-center"
          >
            Acessar
          </a>
        </div>
        <div className="bg-slate-800 flex flex-col my-4 md:my-0 justify-between items-center text-slate-100 rounded-xl p-6 shadow-xl min-w-[180px] min-h-[280px] md:w-[20%]">
          <h1 className="uppercase  font-bold">Repositório</h1>
          <p>
            Material de apoio criado por mim sobre o conteúdo abordado na prova.
          </p>
          <a
            target="_blank"
            href="https://github.com/pvcapuano/aws-certified-cloud-practitioner"
            className="bg-amber-500 rounded-xl p-2 w-full cursor-pointer text-center"
          >
            Acessar
          </a>
        </div>
        <div className="bg-slate-800 flex flex-col my-4 md:my-0 justify-between items-center text-slate-100 rounded-xl p-6 shadow-xl min-w-[180px] min-h-[280px] md:w-[20%]">
          <h1 className="uppercase  font-bold">Curso</h1>
          <p>Curso da FreeCodeCamp sobre a prova de certificação.</p>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=SOTamWNgDKc&t=9475s"
            className="bg-amber-500 rounded-xl p-2 w-full cursor-pointer text-center"
          >
            Acessar
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
