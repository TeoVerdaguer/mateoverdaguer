import { portrait } from "../assets/images";
import { contactLinks } from "../constants";

const Contact = () => {
  return (
    <section
      className="max-container flex justify-center mt-20
        max-lg:flex-col gap-10 text-white font-jakarta-sans text-2xl"
      id="contact">
      <div 
        className="flex justify-between items-center max-sm:justify-center"
      >
        <img src={portrait} alt="" width={200} className="max-sm:hidden" />

        <div className="ml-20 border rounded-xl flex flex-col items-center
        p-8 bg-[#1e1e1e] md:w-[50vw] max-lg:w-[50vw]">
          <div>
            <h2 className="text-4xl mb-10 main-gradient">Follow me</h2>
            <p className="text-lg">Mandame un mensajito pa<br/>
              y vemos que podemos hacer</p>
          </div>
            <div className="flex justify-center gap-8 pt-10 px-8">
              {contactLinks.map(link => (
                <a href={link.link} key={link.id}>
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="h-8 hover:translate-y-[-2px]"
                  />
                </a>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
