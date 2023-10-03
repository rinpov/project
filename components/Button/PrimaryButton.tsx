import { Button, ButtonProps, ButtonVariant } from '@mantine/core';
import { FC } from 'react';

export const enum TypeButton {
    primary = 'primary',
    secondary = 'secondary',
    outline = 'outline',
    subtle = 'subtle',
    transparent = 'transparent',
}

interface ButtonPropsMain {
    buttonProps: ButtonProps,
    buttonTitle: string,
    buttonType: TypeButton
}

export const PrimaryButton: FC<ButtonPropsMain> = ({
    buttonProps,
    buttonTitle = 'Contact us',
    buttonType,
}) => {
    const buttonVariant: ButtonVariant =
        buttonType === TypeButton.outline
            ? 'outline'
            : buttonType === TypeButton.transparent
            ? 'transparent'
            : 'filled';
    return (
        <Button
          {...buttonProps}
          variant={buttonVariant}
        >
            {buttonTitle}
        </Button>
    );
};
