export default function Map() {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-(--bg-white-color)">
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7314.242728474241!2d-46.65496142499143!3d-23.564084278797967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sFIAP%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1757998664702!5m2!1spt-BR!2sbr"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />{" "}
      </div>
    </>
  );
}
