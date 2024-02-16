import { portrait2 } from "../assets/images";
import { contactLinks } from "../constants";

const Contact = () => {
  return (
    <section
      className="max-container flex justify-center mt-20
        max-lg:flex-col gap-10 text-white font-jakarta-sans text-2xl"
      id="contact"
    >
      <div className="flex justify-between items-center max-sm:justify-center">
        <img
          src={portrait2}
          alt="portrait image"
          width={300}
          className="max-sm:hidden"
        />

        <div
          className="ml-20 p-0.5 bg-gradient-to-r from-[#b16cea] via-[#ff5e69]  to-[#ffa84b]
          rounded-xl max-w-[620px] max-sm:ml-0"
        >
          <div
            className="flex flex-col items-center rounded-xl max-w-[610px]
        p-8 bg-[#1e1e1e] md:w-[50vw] max-lg:w-[50vw]"
          >
            <div>
              <h2 className="text-4xl mb-10 main-gradient font-jakarta-sans">Follow me</h2>
              <p className="text-lg  font-jakarta-sans">
                Reach me if you want to build the
                <br />website of your dreams.
              </p>
            </div>
            <div className="flex justify-center gap-8 pt-10 px-8 max-sm:gap-2 max-sm:px-2">
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
