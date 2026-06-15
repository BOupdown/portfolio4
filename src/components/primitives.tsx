import { Badge, Text, Wrap, type TextProps } from "@chakra-ui/react";

/** Small uppercase monospace label used above section titles. */
export function Kicker(props: TextProps) {
  return (
    <Text
      as="span"
      fontFamily="mono"
      fontSize="xs"
      letterSpacing="0.15em"
      textTransform="uppercase"
      color="fg.muted"
      {...props}
    />
  );
}

/** Neutral, monospace technology chip — sober and consistent. */
export function TagList({ tags, max }: { tags: string[]; max?: number }) {
  const shown = max ? tags.slice(0, max) : tags;
  return (
    <Wrap gap="1.5">
      {shown.map((tag) => (
        <Badge
          key={tag}
          variant="outline"
          size="sm"
          color="fg.muted"
          fontFamily="mono"
          fontWeight="normal"
          textTransform="none"
        >
          {tag}
        </Badge>
      ))}
    </Wrap>
  );
}
