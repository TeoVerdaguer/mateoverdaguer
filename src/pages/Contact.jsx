import { portrait2 } from "../assets/images";
import { contactLinks } from "../constants";

const Contact = () => {
  return (
    <section
      className="max-container flex justify-center mt-20 text-white
      font-jakarta-sans text-2xl max-lg:flex-col"
      id="contact"
    >
      <div className="flex items-center justify-center min-md:justify-between">
        <img
          src={portrait2}
          alt="portrait"
          width={300}
          className="hidden md:block"
        />

        <div
          className="p-0.5 bg-gradient-to-r from-[#b16cea] via-[#ff5e69]
          to-[#ffa84b] rounded-xl ml-0 lg:ml-20"
        >
          <div
            className="flex flex-col items-center rounded-xl p-10 lg:px-40 bg-[#1e1e1e]"
          >
            <div>
              <h2 className="text-4xl mb-10 main-gradient font-jakarta-sans">Follow me</h2>
              <p className="text-lg  font-jakarta-sans">
                Reach me if you want to build the
                <br />website of your dreams.
              </p>
            </div>
            <div className="flex justify-center gap-8 pt-10">
              {contactLinks.map((link) => (
                <a href={link.link} target="blank" key={link.id}>
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
      </div>
    </section>
  );
};

export default Contact;
