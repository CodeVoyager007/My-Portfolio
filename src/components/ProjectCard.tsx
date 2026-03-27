"use client";

import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Media
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Column fillWidth gap="m" style={{ maxWidth: 900, margin: "0 auto" }}>
      {images[0] && (
        <Media
          src={images[0]}
          alt={title}
          radius="xl"
          style={{ width: "100%", height: "auto", objectFit: "cover", maxHeight: 420, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
        />
      )}
      <Flex
        mobileDirection="column"
        fillWidth

        paddingTop="24"
        paddingBottom="24"
        gap="l"
        style={{ alignItems: "flex-start" }}
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl" style={{ marginBottom: 8 }}>
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak" style={{ marginBottom: 8 }}>
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
