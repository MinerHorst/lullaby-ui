import { useRouter } from "next/router";
import components, { Component } from "~/content/components";

const findComponentById = (componentSlug: string): Component | undefined => {
  return components.find(
    (component) => component.slug.toString() === componentSlug,
  );
};

const ComponentPage: React.FC = () => {
  const router = useRouter();
  const { componentSlug } = router.query;
  const component = componentSlug
    ? findComponentById(componentSlug as string)
    : undefined;

  return (
    <>
      {component ? (
        <div className="text-white">
          <h1>{component.name}</h1>
          <p>{component.description}</p>
        </div>
      ) : (
        <div className="text-white">Component not found</div>
      )}
    </>
  );
};

export default ComponentPage;
