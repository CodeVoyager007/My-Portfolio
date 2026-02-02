import { Column, Flex, Heading, Meta, Schema, Text, Media, Icon } from "@once-ui-system/core";
import { baseURL, certifications, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: certifications.title,
    description: certifications.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(certifications.title)}`,
    path: certifications.path,
  });
}

export default function Certifications() {
  return (
    <Column maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={certifications.title}
        description={certifications.description}
        path={certifications.path}
        image={`/api/og/generate?title=${encodeURIComponent(certifications.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${certifications.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Flex direction="column" gap="xl">
        <Column gap="m">
          <Heading variant="display-strong-l">{certifications.title}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {certifications.description}
          </Text>
        </Column>
        
        {certifications.display && (
            <div className="responsive-gallery">
              {certifications.images.map((image: any, index: number) => (
                <a 
                  key={index} 
                  href={image.src} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Flex
                    border="neutral-medium"
                    radius="m"
                    direction="column"
                    padding="s"
                    background="surface"
                    style={{ transition: 'transform 0.2s', cursor: 'pointer' }}
                    className="hover-scale"
                  >
                    {image.thumbnail ? (
                      <Media
                        radius="m"
                        src={image.thumbnail}
                        alt={image.alt}
                        style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '4/3' }}
                      />
                    ) : (
                      <Flex
                        fillWidth
                        aspectRatio="4/3"
                        background="neutral-weak"
                        radius="m"
                        vertical="center"
                        horizontal="center"
                      >
                        <Icon name="certificate" size="xl" onBackground="neutral-medium" />
                      </Flex>
                    )}
                    <Text variant="body-default-s" align="center" paddingTop="xs">
                      {image.alt}
                    </Text>
                  </Flex>
                </a>
              ))}
            </div>
        )}
      </Flex>
    </Column>
  );
}
