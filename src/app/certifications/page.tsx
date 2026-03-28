import { Column, Flex, Heading, Meta, Schema, Text, Icon } from "@once-ui-system/core";
import { baseURL, certifications, person } from "@/resources";
import Image from 'next/image';

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
                    style={{ transition: 'all 0.3s ease', cursor: 'pointer', height: '100%' }}
                    className="hover-scale"
                  >
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius-m)', overflow: 'hidden', background: '#000' }}>
                      {image.thumbnail ? (
                        <Image
                          src={image.thumbnail}
                          alt={image.alt}
                          fill
                          style={{ objectFit: 'cover' }}
                          unoptimized
                        />
                      ) : (
                        <Flex
                          fillWidth
                          fillHeight
                          background="neutral-weak"
                          vertical="center"
                          horizontal="center"
                        >
                          <Icon name="certificate" size="xl" onBackground="neutral-medium" />
                        </Flex>
                      )}
                    </div>
                    <Text variant="body-default-s" align="center" paddingTop="xs" style={{ marginTop: 'auto' }}>
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
