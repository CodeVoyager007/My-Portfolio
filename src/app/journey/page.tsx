import { Column, Flex, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import Timeline from "@/components/journey/Timeline";
import { baseURL, journey, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: journey.title,
    description: journey.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(journey.title)}`,
    path: journey.path,
  });
}

export default function Journey() {
  return (
    <Column maxWidth="l" className="page-top-padding">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={journey.title}
        description={journey.description}
        path={journey.path}
        image={`/api/og/generate?title=${encodeURIComponent(journey.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${journey.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Flex direction="column" gap="xl">
        <Column gap="m">
          <Heading variant="display-strong-l">{journey.title}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {journey.description}
          </Text>
        </Column>
        <Timeline
          milestones={journey.milestones.map((milestone) => ({
            ...milestone,
            type:
              milestone.type === "learning" ||
              milestone.type === "foundation" ||
              milestone.type === "achievement"
                ? milestone.type
                : "learning",
          }))}
        />
      </Flex>
    </Column>
  );
} 