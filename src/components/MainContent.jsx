import LocationInfo from "./LocationInfo";
import ResidentsCard from "./ResidentsCard";

const MainContent = ({ location }) => {
  return (
    <>
      <LocationInfo location={location} />
      <section className="resident__container">
        {location?.residents.map((url) => (
          <ResidentsCard key={url} url={url} />
        ))}
      </section>
    </>
  );
};

export default MainContent;
