import styles from "../styles/EventosView.module.css";
import { useNavigate } from 'react-router-dom';

const events = [
  {
    title: "STEM Escribe",
    description:
      "Concurso realizado anualmente por el grupo estudiantil TEMS siguiendo su misión de promover las habilidades blandas. Este espacio está diseñado para que los estudiantes exploren su creatividad y pongan en práctica sus habilidades de escritura, realizando pequeñas obras literarias y en donde se enfrentarán, si desean, su pánico a hablar en público exponiendo sus textos.",
    image: import.meta.env.BASE_URL + "/images/stem_escribe.png",
    organizer: "TEMS",
  },
  {
    title: "Impactando el Colectivo",
    description:
      "Serie de actividades, talleres y charlas organizados por TEMS sobre salud mental, gestión de proyectos y habilidades blandas, con invitados especiales.",
    image: import.meta.env.BASE_URL + "/images/impactando_colectivo.png",
    organizer: "TEMS, WIE, Rama IEEE",
  },
  {
    title: "UNRobot",
    description:
      "La competencia anual de robótica más grande y gratuita de Colombia, que reúne a personas de todas las edades interesadas en aprender y disfrutar de la robótica.",
    image: import.meta.env.BASE_URL + "/images/unrobot.jpg",
    organizer: "RAS",
  },
  {
    title: "Taller de Arduino",
    description: "Aprende a programar y usar Arduino en proyectos prácticos.",
    image: import.meta.env.BASE_URL + "/images/taller_arduino.png",
    organizer: "RAS",
  },
  {
    title: "Taller de modelado 3D",
    description: "Explora el diseño y modelado en 3D para ingeniería y prototipado.",
    image: import.meta.env.BASE_URL + "/images/taller_modelado.png",
    organizer: "RAS",
  },
  {
    title: "Taller de programación",
    description: "Iniciación en programación aplicada a proyectos de ingeniería.",
    image: import.meta.env.BASE_URL + "/images/taller_programacion.png",
    organizer: "RAS",
  },
  {
    title: "EMBS MeetUp",
    description:
      "El 20 de septiembre en la Universidad Nacional de Colombia (sede Bogotá) en modalidad híbrida. Busca fortalecer los lazos entre capítulos estudiantiles de EMBS, con ponencias sobre ingeniería de tejidos, telemedicina, señales (EEG, ECG, EMG) y tecnología sanitaria.",
    image: "",
    organizer: "EMBS",
  },
  {
    title: "Tejido Violeta",
    description: "Prevención de Violencias Basadas en Género.",
    image: "",
    organizer: "WIE",
  },
  {
    title: "Mujeres en Potencia",
    description: "Evento de mujeres en ingeniería eléctrica.",
    image: "",
    organizer: "WIE, PES",
  },
  {
    title: "Taller de soldadura",
    description: "Aprende técnicas de soldadura aplicadas a proyectos electrónicos.",
    image: "",
    organizer: "RAS",
  },
  {
    title: "Hackathon con Whitestack",
    description:
      "Competencia intensiva de innovación y desarrollo de soluciones tecnológicas.",
    image: "",
    organizer: "Computer Society",
  },
  {
    title: "Finanzas y creación de emprendimientos con Women in AI",
    description:
      "Taller práctico para aprender sobre finanzas y emprendimiento, con enfoque en mujeres en inteligencia artificial.",
    image: "",
    organizer: "Computer Society, WIE",
  },
];

function EventosView() {

  const navigate = useNavigate();

  return (
    <div className={styles.view_menu_container}>
        <button className={styles.back_button} onClick={() => navigate("/")}>
            Ir al inicio
        </button>
        <div className={styles.grid}>
        {events.map((event, index) => (
            <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{event.title}</h3>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.imageWrapper}>
                    {event.image ? (
                        <img
                        src={event.image}
                        alt={event.title}
                        className={styles.image}
                        />
                    ) : (
                        <img
                            src={import.meta.env.BASE_URL + '/images/evento_placeholder.png'}
                            alt='imagen_placeholder'
                            className={styles.image}
                        />
                    )}
                </div>
                <p className={styles.description}>{event.description}</p>
                <p className={styles.organizer}>
                Organizado por: {event.organizer}
                </p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default EventosView;
