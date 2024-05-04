import { Info } from '@tamagui/lucide-icons'
import { useRef, useState } from 'react'
import { Button, Input, Paragraph, TooltipSimple, XStack, YStack } from 'tamagui'

export type FieldsetWithLabelProps = {
  enableEditLabel?: boolean
  onChangeLabel?: (name: string) => void
  label: string
  children: any
  tooltip?: any
  afterLabel?: any
  isActive?: boolean
  onPress?: () => void
}

export const FieldsetWithLabel = ({
  label,
  afterLabel,
  tooltip,
  children,
  enableEditLabel,
  onChangeLabel,
  isActive,
  onPress,
}: FieldsetWithLabelProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const text = useRef('')

  return (
    <YStack
      tag="fieldset"
      br="$4"
      bc={isActive ? '$color9' : '$color6'}
      bw={1}
      px="$3"
      pt={afterLabel ? '$3' : '$2'}
      mt="$3"
      gap="$4"
      onPress={onPress}
    >
      <YStack
        pos="absolute"
        t={0}
        y={-12}
        l="$2.5"
        zi={100}
        bg="$background"
        br="$10"
        px="$3"
        {...(tooltip && {
          pr: '$6',
        })}
        {...(enableEditLabel && {
          cur: 'pointer',
          onPress: () => {
            setIsEditing(true)
          },
        })}
      >
        {isEditing ? (
          <Input
            size="$3"
            autoFocus
            selectTextOnFocus
            onEndEditing={() => {
              setIsEditing(false)
            }}
            defaultValue={label}
            onChangeText={(t) => {
              text.current = t
            }}
            onSubmitEditing={() => {
              onChangeLabel?.(text.current)
            }}
            onKeyPress={(e) => {
              if (e['key'] === 'Escape') {
                setIsEditing(false)
              }
              if (e['key'] === 'Enter') {
                setIsEditing(false)
                onChangeLabel?.(text.current)
              }
            }}
          />
        ) : (
          <Paragraph
            selectable={false}
            tag="label"
            size="$4"
            color="$color12"
            fow="600"
            {...(tooltip && {
              pr: '$6',
            })}
          >
            {label}

            {!!tooltip && (
              <TooltipSimple
                size="$3"
                label={
                  <YStack p="$2" maxWidth={200}>
                    <Paragraph size="$2" lh="$1">
                      {tooltip}
                    </Paragraph>
                  </YStack>
                }
              >
                <Button
                  color="$color9"
                  size="$1"
                  scaleIcon={1.2}
                  ml="$2"
                  circular
                  br={100}
                  hoverTheme={false}
                  pressTheme={false}
                  chromeless
                  icon={Info}
                  pos="absolute"
                  t={0}
                  r={8}
                />
              </TooltipSimple>
            )}
          </Paragraph>
        )}
      </YStack>

      {!!afterLabel && (
        <XStack pos="absolute" t={-12} r="$4" zi={100} bg="$background" br="$4" px="$2">
          {afterLabel}
        </XStack>
      )}

      {children}
    </YStack>
  )
}
