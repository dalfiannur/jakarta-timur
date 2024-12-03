import { AvatarBox } from "@/app/components/AvatarBox";
import { Box } from "@/app/components/Box";
import { Flex } from "@/app/components/Flex";
import { Text } from "@/app/components/Text";
import { Icon, IconKeys } from "@/app/icons";
import { formattedNumber } from "@/utils/format-number";

type FilledCounterCardProps = {
  title: string;
  value: number;
  icon?: IconKeys;
};

export const FilledCounterCard = ({
  title,
  value,
  icon,
}: FilledCounterCardProps) => {
  return (
    <Box
      rounded="lg"
      padding={{ initial: "sm", md: "md", lg: "lg" }}
      className="bg-orange-50"
    >
      <Flex justify="between" align="center" gap="sm">
        <Flex flex direction="column" gap="sm">
          <Text size="xl" weight="bold">
            {formattedNumber(value)}
          </Text>
          <Text uppercase size="xxs" weight="medium" color="subtle">
            {title}
          </Text>
        </Flex>
        {icon && (
          <AvatarBox variant="light" color="orange" size="sm">
            <Icon name={icon} className="h-6 w-6 text-orange-500" />
          </AvatarBox>
        )}
      </Flex>
    </Box>
  );
};
