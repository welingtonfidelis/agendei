import {
  Button,
  ButtonGroup,
  Popover as PopoverChakra,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { Props } from "./types";
import { PropsWithChildren, useRef } from "react";
import { useTranslation } from "react-i18next";

export const Popover = (props: PropsWithChildren<Props>) => {
  const {
    children,
    title,
    description,
    showActionButtons = true,
    leftActionButtonText,
    rightActionButtonAction,
    leftActionButtonAction,
    rightActionButtonText,
  } = props;

  const { t } = useTranslation();
  const initRef = useRef<any>();

  const handleClick = (onClose: () => void, type: "left" | "right") => {
    const options = {
      ["left"]: () => leftActionButtonAction && leftActionButtonAction(),
      ["right"]: () => rightActionButtonAction && rightActionButtonAction(),
    };

    options[type]();
    onClose();
  };

  return (
    <PopoverChakra initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>{children}</PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>{title}</PopoverHeader>
            <PopoverBody>{description}</PopoverBody>
            <PopoverFooter
              border="0"
              display="flex"
              alignItems="center"
              justifyContent="end"
              pb={4}
            >
              {showActionButtons && (
                <ButtonGroup size="sm">
                  <Button
                    colorScheme="gray"
                    onClick={() => handleClick(onClose, "left")}
                    ref={initRef}
                  >
                    {leftActionButtonText || t("generic.button_cancel")}
                  </Button>
                  <Button
                    colorScheme="blue"
                    onClick={() => handleClick(onClose, "right")}
                    ref={initRef}
                  >
                    {rightActionButtonText || t("generic.button_save")}
                  </Button>
                </ButtonGroup>
              )}
            </PopoverFooter>
          </PopoverContent>
        </>
      )}
    </PopoverChakra>
  );
};
