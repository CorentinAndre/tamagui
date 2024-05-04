import type { DatePickerProviderProps } from '@rehookify/datepicker';
import type { GestureReponderEvent } from '@tamagui/web';
import type { PopoverProps } from 'tamagui';
/** rehookify internally return `onClick` and that's incompatible with native */
export declare function swapOnClick<D>(d: D): D;
type DatePickerProps = PopoverProps & {
    config: DatePickerProviderProps['config'];
};
export declare const HeaderTypeProvider: import("react").ProviderExoticComponent<Partial<{
    type: string;
    setHeader: (_: 'day' | 'month' | 'year') => void;
}> & {
    children?: import("react").ReactNode;
    scope?: string | undefined;
}>, useHeaderType: (scope?: string | undefined) => {
    type: string;
    setHeader: (_: 'day' | 'month' | 'year') => void;
};
export declare const DatePicker: ((props: DatePickerProps) => import("react/jsx-runtime").JSX.Element) & {
    Trigger: import("react").ForwardRefExoticComponent<import("tamagui").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & {
        __scopePopover?: string | undefined;
    } & import("react").RefAttributes<import("tamagui").TamaguiElement>>;
    Content: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("tamagui").PopoverContentTypeProps & {
        __scopePopover?: string | undefined;
    } & import("react").RefAttributes<HTMLElement | import("react-native").View>, keyof import("@tamagui/web").StackStyleBase | "unstyled"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        unstyled?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        unstyled?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        unstyled?: boolean | undefined;
    }>> & import("react").RefAttributes<HTMLElement | import("react-native").View>> & import("@tamagui/web").StaticComponentObject<import("@tamagui/web").TamaDefer, HTMLElement | import("react-native").View, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("tamagui").PopoverContentTypeProps & {
        __scopePopover?: string | undefined;
    } & import("react").RefAttributes<HTMLElement | import("react-native").View>, import("@tamagui/web").StackStyleBase, {
        unstyled?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic> & Omit<import("@tamagui/web").StaticConfigPublic, "staticConfig" | "extractable" | "styleable"> & {
        __tama: [import("@tamagui/web").TamaDefer, HTMLElement | import("react-native").View, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("tamagui").PopoverContentTypeProps & {
            __scopePopover?: string | undefined;
        } & import("react").RefAttributes<HTMLElement | import("react-native").View>, import("@tamagui/web").StackStyleBase, {
            unstyled?: boolean | undefined;
        }, import("@tamagui/web").StaticConfigPublic];
    } & {
        Arrow: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("tamagui").PopperArrowExtraProps, import("@tamagui/web").StackStyleBase, {
            elevation?: number | import("tamagui").SizeTokens | undefined;
            fullscreen?: boolean | undefined;
            inset?: number | import("tamagui").SizeTokens | {
                top?: number | undefined;
                bottom?: number | undefined;
                left?: number | undefined;
                right?: number | undefined;
            } | undefined;
            unstyled?: boolean | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
    };
};
type DatePickerInputProps = {
    onReset: () => void;
    onButtonPress?: (e: GestureReponderEvent) => void;
};
export declare const DatePickerInput: import("tamagui").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps & import("tamagui").InputExtraProps, import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<"unset" | "inherit" | "tan" | "blue" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow" | import("tamagui").Variable<any> | `var(${string})` | "$gray11" | "$gray9" | "$yellow1Light" | "$yellow2Light" | "$yellow3Light" | "$yellow4Light" | "$yellow5Light" | "$yellow6Light" | "$yellow7Light" | "$yellow8Light" | "$yellow9Light" | "$yellow10Light" | "$yellow11Light" | "$yellow12Light" | "$red1Light" | "$red2Light" | "$red3Light" | "$red4Light" | "$red5Light" | "$red6Light" | "$red7Light" | "$red8Light" | "$red9Light" | "$red10Light" | "$red11Light" | "$red12Light" | "$purple1Light" | "$purple2Light" | "$purple3Light" | "$purple4Light" | "$purple5Light" | "$purple6Light" | "$purple7Light" | "$purple8Light" | "$purple9Light" | "$purple10Light" | "$purple11Light" | "$purple12Light" | "$pink1Light" | "$pink2Light" | "$pink3Light" | "$pink4Light" | "$pink5Light" | "$pink6Light" | "$pink7Light" | "$pink8Light" | "$pink9Light" | "$pink10Light" | "$pink11Light" | "$pink12Light" | "$orange1Light" | "$orange2Light" | "$orange3Light" | "$orange4Light" | "$orange5Light" | "$orange6Light" | "$orange7Light" | "$orange8Light" | "$orange9Light" | "$orange10Light" | "$orange11Light" | "$orange12Light" | "$green1Light" | "$green2Light" | "$green3Light" | "$green4Light" | "$green5Light" | "$green6Light" | "$green7Light" | "$green8Light" | "$green9Light" | "$green10Light" | "$green11Light" | "$green12Light" | "$gray1Light" | "$gray2Light" | "$gray3Light" | "$gray4Light" | "$gray5Light" | "$gray6Light" | "$gray7Light" | "$gray8Light" | "$gray9Light" | "$gray10Light" | "$gray11Light" | "$gray12Light" | "$blue1Light" | "$blue2Light" | "$blue3Light" | "$blue4Light" | "$blue5Light" | "$blue6Light" | "$blue7Light" | "$blue8Light" | "$blue9Light" | "$blue10Light" | "$blue11Light" | "$blue12Light" | "$yellow1Dark" | "$yellow2Dark" | "$yellow3Dark" | "$yellow4Dark" | "$yellow5Dark" | "$yellow6Dark" | "$yellow7Dark" | "$yellow8Dark" | "$yellow9Dark" | "$yellow10Dark" | "$yellow11Dark" | "$yellow12Dark" | "$red1Dark" | "$red2Dark" | "$red3Dark" | "$red4Dark" | "$red5Dark" | "$red6Dark" | "$red7Dark" | "$red8Dark" | "$red9Dark" | "$red10Dark" | "$red11Dark" | "$red12Dark" | "$purple1Dark" | "$purple2Dark" | "$purple3Dark" | "$purple4Dark" | "$purple5Dark" | "$purple6Dark" | "$purple7Dark" | "$purple8Dark" | "$purple9Dark" | "$purple10Dark" | "$purple11Dark" | "$purple12Dark" | "$pink1Dark" | "$pink2Dark" | "$pink3Dark" | "$pink4Dark" | "$pink5Dark" | "$pink6Dark" | "$pink7Dark" | "$pink8Dark" | "$pink9Dark" | "$pink10Dark" | "$pink11Dark" | "$pink12Dark" | "$orange1Dark" | "$orange2Dark" | "$orange3Dark" | "$orange4Dark" | "$orange5Dark" | "$orange6Dark" | "$orange7Dark" | "$orange8Dark" | "$orange9Dark" | "$orange10Dark" | "$orange11Dark" | "$orange12Dark" | "$green1Dark" | "$green2Dark" | "$green3Dark" | "$green4Dark" | "$green5Dark" | "$green6Dark" | "$green7Dark" | "$green8Dark" | "$green9Dark" | "$green10Dark" | "$green11Dark" | "$green12Dark" | "$gray1Dark" | "$gray2Dark" | "$gray3Dark" | "$gray4Dark" | "$gray5Dark" | "$gray6Dark" | "$gray7Dark" | "$gray8Dark" | "$gray9Dark" | "$gray10Dark" | "$gray11Dark" | "$gray12Dark" | "$blue1Dark" | "$blue2Dark" | "$blue3Dark" | "$blue4Dark" | "$blue5Dark" | "$blue6Dark" | "$blue7Dark" | "$blue8Dark" | "$blue9Dark" | "$blue10Dark" | "$blue11Dark" | "$blue12Dark" | "$white0" | "$white075" | "$white05" | "$white025" | "$black0" | "$black075" | "$black05" | "$black025" | "$white1" | "$white2" | "$white3" | "$white4" | "$white5" | "$white6" | "$white7" | "$white8" | "$white9" | "$white10" | "$white11" | "$white12" | "$black1" | "$black2" | "$black3" | "$black4" | "$black5" | "$black6" | "$black7" | "$black8" | "$black9" | "$black10" | "$black11" | "$black12" | "$color" | "$borderColor" | "$shadowColor" | "$accentBackground" | "$accentColor" | "$background0" | "$background025" | "$background05" | "$background075" | "$color1" | "$color2" | "$color3" | "$color4" | "$color5" | "$color6" | "$color7" | "$color8" | "$color9" | "$color10" | "$color11" | "$color12" | "$color0" | "$color025" | "$color05" | "$color075" | "$background" | "$backgroundHover" | "$backgroundPress" | "$backgroundFocus" | "$borderColorHover" | "$borderColorPress" | "$borderColorFocus" | "$colorHover" | "$colorPress" | "$colorFocus" | "$colorTransparent" | "$placeholderColor" | "$outlineColor" | "$shadowColorHover" | "$shadowColorPress" | "$shadowColorFocus" | "$yellow1" | "$yellow2" | "$yellow3" | "$yellow4" | "$yellow5" | "$yellow6" | "$yellow7" | "$yellow8" | "$yellow9" | "$yellow10" | "$yellow11" | "$yellow12" | "$red1" | "$red2" | "$red3" | "$red4" | "$red5" | "$red6" | "$red7" | "$red8" | "$red9" | "$red10" | "$red11" | "$red12" | "$purple1" | "$purple2" | "$purple3" | "$purple4" | "$purple5" | "$purple6" | "$purple7" | "$purple8" | "$purple9" | "$purple10" | "$purple11" | "$purple12" | "$pink1" | "$pink2" | "$pink3" | "$pink4" | "$pink5" | "$pink6" | "$pink7" | "$pink8" | "$pink9" | "$pink10" | "$pink11" | "$pink12" | "$orange1" | "$orange2" | "$orange3" | "$orange4" | "$orange5" | "$orange6" | "$orange7" | "$orange8" | "$orange9" | "$orange10" | "$orange11" | "$orange12" | "$green1" | "$green2" | "$green3" | "$green4" | "$green5" | "$green6" | "$green7" | "$green8" | "$green9" | "$green10" | "$green11" | "$green12" | "$gray1" | "$gray2" | "$gray3" | "$gray4" | "$gray5" | "$gray6" | "$gray7" | "$gray8" | "$gray10" | "$gray12" | "$blue1" | "$blue2" | "$blue3" | "$blue4" | "$blue5" | "$blue6" | "$blue7" | "$blue8" | "$blue9" | "$blue10" | "$blue11" | "$blue12" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred " | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "plum" | "powderblue" | "rebeccapurple" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellowgreen" | "transparent" | (`rgba(${string})` & {}) | (`rgb(${string})` & {}) | (`hsl(${string})` & {}) | (`hsla(${string})` & {}) | (`#${string}` & {}), "unset"> | undefined;
    readonly selectionColor?: Omit<"unset" | "inherit" | "tan" | "blue" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow" | import("tamagui").Variable<any> | `var(${string})` | "$gray11" | "$gray9" | "$yellow1Light" | "$yellow2Light" | "$yellow3Light" | "$yellow4Light" | "$yellow5Light" | "$yellow6Light" | "$yellow7Light" | "$yellow8Light" | "$yellow9Light" | "$yellow10Light" | "$yellow11Light" | "$yellow12Light" | "$red1Light" | "$red2Light" | "$red3Light" | "$red4Light" | "$red5Light" | "$red6Light" | "$red7Light" | "$red8Light" | "$red9Light" | "$red10Light" | "$red11Light" | "$red12Light" | "$purple1Light" | "$purple2Light" | "$purple3Light" | "$purple4Light" | "$purple5Light" | "$purple6Light" | "$purple7Light" | "$purple8Light" | "$purple9Light" | "$purple10Light" | "$purple11Light" | "$purple12Light" | "$pink1Light" | "$pink2Light" | "$pink3Light" | "$pink4Light" | "$pink5Light" | "$pink6Light" | "$pink7Light" | "$pink8Light" | "$pink9Light" | "$pink10Light" | "$pink11Light" | "$pink12Light" | "$orange1Light" | "$orange2Light" | "$orange3Light" | "$orange4Light" | "$orange5Light" | "$orange6Light" | "$orange7Light" | "$orange8Light" | "$orange9Light" | "$orange10Light" | "$orange11Light" | "$orange12Light" | "$green1Light" | "$green2Light" | "$green3Light" | "$green4Light" | "$green5Light" | "$green6Light" | "$green7Light" | "$green8Light" | "$green9Light" | "$green10Light" | "$green11Light" | "$green12Light" | "$gray1Light" | "$gray2Light" | "$gray3Light" | "$gray4Light" | "$gray5Light" | "$gray6Light" | "$gray7Light" | "$gray8Light" | "$gray9Light" | "$gray10Light" | "$gray11Light" | "$gray12Light" | "$blue1Light" | "$blue2Light" | "$blue3Light" | "$blue4Light" | "$blue5Light" | "$blue6Light" | "$blue7Light" | "$blue8Light" | "$blue9Light" | "$blue10Light" | "$blue11Light" | "$blue12Light" | "$yellow1Dark" | "$yellow2Dark" | "$yellow3Dark" | "$yellow4Dark" | "$yellow5Dark" | "$yellow6Dark" | "$yellow7Dark" | "$yellow8Dark" | "$yellow9Dark" | "$yellow10Dark" | "$yellow11Dark" | "$yellow12Dark" | "$red1Dark" | "$red2Dark" | "$red3Dark" | "$red4Dark" | "$red5Dark" | "$red6Dark" | "$red7Dark" | "$red8Dark" | "$red9Dark" | "$red10Dark" | "$red11Dark" | "$red12Dark" | "$purple1Dark" | "$purple2Dark" | "$purple3Dark" | "$purple4Dark" | "$purple5Dark" | "$purple6Dark" | "$purple7Dark" | "$purple8Dark" | "$purple9Dark" | "$purple10Dark" | "$purple11Dark" | "$purple12Dark" | "$pink1Dark" | "$pink2Dark" | "$pink3Dark" | "$pink4Dark" | "$pink5Dark" | "$pink6Dark" | "$pink7Dark" | "$pink8Dark" | "$pink9Dark" | "$pink10Dark" | "$pink11Dark" | "$pink12Dark" | "$orange1Dark" | "$orange2Dark" | "$orange3Dark" | "$orange4Dark" | "$orange5Dark" | "$orange6Dark" | "$orange7Dark" | "$orange8Dark" | "$orange9Dark" | "$orange10Dark" | "$orange11Dark" | "$orange12Dark" | "$green1Dark" | "$green2Dark" | "$green3Dark" | "$green4Dark" | "$green5Dark" | "$green6Dark" | "$green7Dark" | "$green8Dark" | "$green9Dark" | "$green10Dark" | "$green11Dark" | "$green12Dark" | "$gray1Dark" | "$gray2Dark" | "$gray3Dark" | "$gray4Dark" | "$gray5Dark" | "$gray6Dark" | "$gray7Dark" | "$gray8Dark" | "$gray9Dark" | "$gray10Dark" | "$gray11Dark" | "$gray12Dark" | "$blue1Dark" | "$blue2Dark" | "$blue3Dark" | "$blue4Dark" | "$blue5Dark" | "$blue6Dark" | "$blue7Dark" | "$blue8Dark" | "$blue9Dark" | "$blue10Dark" | "$blue11Dark" | "$blue12Dark" | "$white0" | "$white075" | "$white05" | "$white025" | "$black0" | "$black075" | "$black05" | "$black025" | "$white1" | "$white2" | "$white3" | "$white4" | "$white5" | "$white6" | "$white7" | "$white8" | "$white9" | "$white10" | "$white11" | "$white12" | "$black1" | "$black2" | "$black3" | "$black4" | "$black5" | "$black6" | "$black7" | "$black8" | "$black9" | "$black10" | "$black11" | "$black12" | "$color" | "$borderColor" | "$shadowColor" | "$accentBackground" | "$accentColor" | "$background0" | "$background025" | "$background05" | "$background075" | "$color1" | "$color2" | "$color3" | "$color4" | "$color5" | "$color6" | "$color7" | "$color8" | "$color9" | "$color10" | "$color11" | "$color12" | "$color0" | "$color025" | "$color05" | "$color075" | "$background" | "$backgroundHover" | "$backgroundPress" | "$backgroundFocus" | "$borderColorHover" | "$borderColorPress" | "$borderColorFocus" | "$colorHover" | "$colorPress" | "$colorFocus" | "$colorTransparent" | "$placeholderColor" | "$outlineColor" | "$shadowColorHover" | "$shadowColorPress" | "$shadowColorFocus" | "$yellow1" | "$yellow2" | "$yellow3" | "$yellow4" | "$yellow5" | "$yellow6" | "$yellow7" | "$yellow8" | "$yellow9" | "$yellow10" | "$yellow11" | "$yellow12" | "$red1" | "$red2" | "$red3" | "$red4" | "$red5" | "$red6" | "$red7" | "$red8" | "$red9" | "$red10" | "$red11" | "$red12" | "$purple1" | "$purple2" | "$purple3" | "$purple4" | "$purple5" | "$purple6" | "$purple7" | "$purple8" | "$purple9" | "$purple10" | "$purple11" | "$purple12" | "$pink1" | "$pink2" | "$pink3" | "$pink4" | "$pink5" | "$pink6" | "$pink7" | "$pink8" | "$pink9" | "$pink10" | "$pink11" | "$pink12" | "$orange1" | "$orange2" | "$orange3" | "$orange4" | "$orange5" | "$orange6" | "$orange7" | "$orange8" | "$orange9" | "$orange10" | "$orange11" | "$orange12" | "$green1" | "$green2" | "$green3" | "$green4" | "$green5" | "$green6" | "$green7" | "$green8" | "$green9" | "$green10" | "$green11" | "$green12" | "$gray1" | "$gray2" | "$gray3" | "$gray4" | "$gray5" | "$gray6" | "$gray7" | "$gray8" | "$gray10" | "$gray12" | "$blue1" | "$blue2" | "$blue3" | "$blue4" | "$blue5" | "$blue6" | "$blue7" | "$blue8" | "$blue9" | "$blue10" | "$blue11" | "$blue12" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred " | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "plum" | "powderblue" | "rebeccapurple" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellowgreen" | "transparent" | (`rgba(${string})` & {}) | (`rgb(${string})` & {}) | (`hsl(${string})` & {}) | (`hsla(${string})` & {}) | (`#${string}` & {}), "unset"> | undefined;
}, {
    size?: import("tamagui").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}>, keyof DatePickerInputProps> & DatePickerInputProps, import("react-native").TextInput, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps & import("tamagui").InputExtraProps & void & DatePickerInputProps, import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<"unset" | "inherit" | "tan" | "blue" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow" | import("tamagui").Variable<any> | `var(${string})` | "$gray11" | "$gray9" | "$yellow1Light" | "$yellow2Light" | "$yellow3Light" | "$yellow4Light" | "$yellow5Light" | "$yellow6Light" | "$yellow7Light" | "$yellow8Light" | "$yellow9Light" | "$yellow10Light" | "$yellow11Light" | "$yellow12Light" | "$red1Light" | "$red2Light" | "$red3Light" | "$red4Light" | "$red5Light" | "$red6Light" | "$red7Light" | "$red8Light" | "$red9Light" | "$red10Light" | "$red11Light" | "$red12Light" | "$purple1Light" | "$purple2Light" | "$purple3Light" | "$purple4Light" | "$purple5Light" | "$purple6Light" | "$purple7Light" | "$purple8Light" | "$purple9Light" | "$purple10Light" | "$purple11Light" | "$purple12Light" | "$pink1Light" | "$pink2Light" | "$pink3Light" | "$pink4Light" | "$pink5Light" | "$pink6Light" | "$pink7Light" | "$pink8Light" | "$pink9Light" | "$pink10Light" | "$pink11Light" | "$pink12Light" | "$orange1Light" | "$orange2Light" | "$orange3Light" | "$orange4Light" | "$orange5Light" | "$orange6Light" | "$orange7Light" | "$orange8Light" | "$orange9Light" | "$orange10Light" | "$orange11Light" | "$orange12Light" | "$green1Light" | "$green2Light" | "$green3Light" | "$green4Light" | "$green5Light" | "$green6Light" | "$green7Light" | "$green8Light" | "$green9Light" | "$green10Light" | "$green11Light" | "$green12Light" | "$gray1Light" | "$gray2Light" | "$gray3Light" | "$gray4Light" | "$gray5Light" | "$gray6Light" | "$gray7Light" | "$gray8Light" | "$gray9Light" | "$gray10Light" | "$gray11Light" | "$gray12Light" | "$blue1Light" | "$blue2Light" | "$blue3Light" | "$blue4Light" | "$blue5Light" | "$blue6Light" | "$blue7Light" | "$blue8Light" | "$blue9Light" | "$blue10Light" | "$blue11Light" | "$blue12Light" | "$yellow1Dark" | "$yellow2Dark" | "$yellow3Dark" | "$yellow4Dark" | "$yellow5Dark" | "$yellow6Dark" | "$yellow7Dark" | "$yellow8Dark" | "$yellow9Dark" | "$yellow10Dark" | "$yellow11Dark" | "$yellow12Dark" | "$red1Dark" | "$red2Dark" | "$red3Dark" | "$red4Dark" | "$red5Dark" | "$red6Dark" | "$red7Dark" | "$red8Dark" | "$red9Dark" | "$red10Dark" | "$red11Dark" | "$red12Dark" | "$purple1Dark" | "$purple2Dark" | "$purple3Dark" | "$purple4Dark" | "$purple5Dark" | "$purple6Dark" | "$purple7Dark" | "$purple8Dark" | "$purple9Dark" | "$purple10Dark" | "$purple11Dark" | "$purple12Dark" | "$pink1Dark" | "$pink2Dark" | "$pink3Dark" | "$pink4Dark" | "$pink5Dark" | "$pink6Dark" | "$pink7Dark" | "$pink8Dark" | "$pink9Dark" | "$pink10Dark" | "$pink11Dark" | "$pink12Dark" | "$orange1Dark" | "$orange2Dark" | "$orange3Dark" | "$orange4Dark" | "$orange5Dark" | "$orange6Dark" | "$orange7Dark" | "$orange8Dark" | "$orange9Dark" | "$orange10Dark" | "$orange11Dark" | "$orange12Dark" | "$green1Dark" | "$green2Dark" | "$green3Dark" | "$green4Dark" | "$green5Dark" | "$green6Dark" | "$green7Dark" | "$green8Dark" | "$green9Dark" | "$green10Dark" | "$green11Dark" | "$green12Dark" | "$gray1Dark" | "$gray2Dark" | "$gray3Dark" | "$gray4Dark" | "$gray5Dark" | "$gray6Dark" | "$gray7Dark" | "$gray8Dark" | "$gray9Dark" | "$gray10Dark" | "$gray11Dark" | "$gray12Dark" | "$blue1Dark" | "$blue2Dark" | "$blue3Dark" | "$blue4Dark" | "$blue5Dark" | "$blue6Dark" | "$blue7Dark" | "$blue8Dark" | "$blue9Dark" | "$blue10Dark" | "$blue11Dark" | "$blue12Dark" | "$white0" | "$white075" | "$white05" | "$white025" | "$black0" | "$black075" | "$black05" | "$black025" | "$white1" | "$white2" | "$white3" | "$white4" | "$white5" | "$white6" | "$white7" | "$white8" | "$white9" | "$white10" | "$white11" | "$white12" | "$black1" | "$black2" | "$black3" | "$black4" | "$black5" | "$black6" | "$black7" | "$black8" | "$black9" | "$black10" | "$black11" | "$black12" | "$color" | "$borderColor" | "$shadowColor" | "$accentBackground" | "$accentColor" | "$background0" | "$background025" | "$background05" | "$background075" | "$color1" | "$color2" | "$color3" | "$color4" | "$color5" | "$color6" | "$color7" | "$color8" | "$color9" | "$color10" | "$color11" | "$color12" | "$color0" | "$color025" | "$color05" | "$color075" | "$background" | "$backgroundHover" | "$backgroundPress" | "$backgroundFocus" | "$borderColorHover" | "$borderColorPress" | "$borderColorFocus" | "$colorHover" | "$colorPress" | "$colorFocus" | "$colorTransparent" | "$placeholderColor" | "$outlineColor" | "$shadowColorHover" | "$shadowColorPress" | "$shadowColorFocus" | "$yellow1" | "$yellow2" | "$yellow3" | "$yellow4" | "$yellow5" | "$yellow6" | "$yellow7" | "$yellow8" | "$yellow9" | "$yellow10" | "$yellow11" | "$yellow12" | "$red1" | "$red2" | "$red3" | "$red4" | "$red5" | "$red6" | "$red7" | "$red8" | "$red9" | "$red10" | "$red11" | "$red12" | "$purple1" | "$purple2" | "$purple3" | "$purple4" | "$purple5" | "$purple6" | "$purple7" | "$purple8" | "$purple9" | "$purple10" | "$purple11" | "$purple12" | "$pink1" | "$pink2" | "$pink3" | "$pink4" | "$pink5" | "$pink6" | "$pink7" | "$pink8" | "$pink9" | "$pink10" | "$pink11" | "$pink12" | "$orange1" | "$orange2" | "$orange3" | "$orange4" | "$orange5" | "$orange6" | "$orange7" | "$orange8" | "$orange9" | "$orange10" | "$orange11" | "$orange12" | "$green1" | "$green2" | "$green3" | "$green4" | "$green5" | "$green6" | "$green7" | "$green8" | "$green9" | "$green10" | "$green11" | "$green12" | "$gray1" | "$gray2" | "$gray3" | "$gray4" | "$gray5" | "$gray6" | "$gray7" | "$gray8" | "$gray10" | "$gray12" | "$blue1" | "$blue2" | "$blue3" | "$blue4" | "$blue5" | "$blue6" | "$blue7" | "$blue8" | "$blue9" | "$blue10" | "$blue11" | "$blue12" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred " | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "plum" | "powderblue" | "rebeccapurple" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellowgreen" | "transparent" | (`rgba(${string})` & {}) | (`rgb(${string})` & {}) | (`hsl(${string})` & {}) | (`hsla(${string})` & {}) | (`#${string}` & {}), "unset"> | undefined;
    readonly selectionColor?: Omit<"unset" | "inherit" | "tan" | "blue" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "yellow" | import("tamagui").Variable<any> | `var(${string})` | "$gray11" | "$gray9" | "$yellow1Light" | "$yellow2Light" | "$yellow3Light" | "$yellow4Light" | "$yellow5Light" | "$yellow6Light" | "$yellow7Light" | "$yellow8Light" | "$yellow9Light" | "$yellow10Light" | "$yellow11Light" | "$yellow12Light" | "$red1Light" | "$red2Light" | "$red3Light" | "$red4Light" | "$red5Light" | "$red6Light" | "$red7Light" | "$red8Light" | "$red9Light" | "$red10Light" | "$red11Light" | "$red12Light" | "$purple1Light" | "$purple2Light" | "$purple3Light" | "$purple4Light" | "$purple5Light" | "$purple6Light" | "$purple7Light" | "$purple8Light" | "$purple9Light" | "$purple10Light" | "$purple11Light" | "$purple12Light" | "$pink1Light" | "$pink2Light" | "$pink3Light" | "$pink4Light" | "$pink5Light" | "$pink6Light" | "$pink7Light" | "$pink8Light" | "$pink9Light" | "$pink10Light" | "$pink11Light" | "$pink12Light" | "$orange1Light" | "$orange2Light" | "$orange3Light" | "$orange4Light" | "$orange5Light" | "$orange6Light" | "$orange7Light" | "$orange8Light" | "$orange9Light" | "$orange10Light" | "$orange11Light" | "$orange12Light" | "$green1Light" | "$green2Light" | "$green3Light" | "$green4Light" | "$green5Light" | "$green6Light" | "$green7Light" | "$green8Light" | "$green9Light" | "$green10Light" | "$green11Light" | "$green12Light" | "$gray1Light" | "$gray2Light" | "$gray3Light" | "$gray4Light" | "$gray5Light" | "$gray6Light" | "$gray7Light" | "$gray8Light" | "$gray9Light" | "$gray10Light" | "$gray11Light" | "$gray12Light" | "$blue1Light" | "$blue2Light" | "$blue3Light" | "$blue4Light" | "$blue5Light" | "$blue6Light" | "$blue7Light" | "$blue8Light" | "$blue9Light" | "$blue10Light" | "$blue11Light" | "$blue12Light" | "$yellow1Dark" | "$yellow2Dark" | "$yellow3Dark" | "$yellow4Dark" | "$yellow5Dark" | "$yellow6Dark" | "$yellow7Dark" | "$yellow8Dark" | "$yellow9Dark" | "$yellow10Dark" | "$yellow11Dark" | "$yellow12Dark" | "$red1Dark" | "$red2Dark" | "$red3Dark" | "$red4Dark" | "$red5Dark" | "$red6Dark" | "$red7Dark" | "$red8Dark" | "$red9Dark" | "$red10Dark" | "$red11Dark" | "$red12Dark" | "$purple1Dark" | "$purple2Dark" | "$purple3Dark" | "$purple4Dark" | "$purple5Dark" | "$purple6Dark" | "$purple7Dark" | "$purple8Dark" | "$purple9Dark" | "$purple10Dark" | "$purple11Dark" | "$purple12Dark" | "$pink1Dark" | "$pink2Dark" | "$pink3Dark" | "$pink4Dark" | "$pink5Dark" | "$pink6Dark" | "$pink7Dark" | "$pink8Dark" | "$pink9Dark" | "$pink10Dark" | "$pink11Dark" | "$pink12Dark" | "$orange1Dark" | "$orange2Dark" | "$orange3Dark" | "$orange4Dark" | "$orange5Dark" | "$orange6Dark" | "$orange7Dark" | "$orange8Dark" | "$orange9Dark" | "$orange10Dark" | "$orange11Dark" | "$orange12Dark" | "$green1Dark" | "$green2Dark" | "$green3Dark" | "$green4Dark" | "$green5Dark" | "$green6Dark" | "$green7Dark" | "$green8Dark" | "$green9Dark" | "$green10Dark" | "$green11Dark" | "$green12Dark" | "$gray1Dark" | "$gray2Dark" | "$gray3Dark" | "$gray4Dark" | "$gray5Dark" | "$gray6Dark" | "$gray7Dark" | "$gray8Dark" | "$gray9Dark" | "$gray10Dark" | "$gray11Dark" | "$gray12Dark" | "$blue1Dark" | "$blue2Dark" | "$blue3Dark" | "$blue4Dark" | "$blue5Dark" | "$blue6Dark" | "$blue7Dark" | "$blue8Dark" | "$blue9Dark" | "$blue10Dark" | "$blue11Dark" | "$blue12Dark" | "$white0" | "$white075" | "$white05" | "$white025" | "$black0" | "$black075" | "$black05" | "$black025" | "$white1" | "$white2" | "$white3" | "$white4" | "$white5" | "$white6" | "$white7" | "$white8" | "$white9" | "$white10" | "$white11" | "$white12" | "$black1" | "$black2" | "$black3" | "$black4" | "$black5" | "$black6" | "$black7" | "$black8" | "$black9" | "$black10" | "$black11" | "$black12" | "$color" | "$borderColor" | "$shadowColor" | "$accentBackground" | "$accentColor" | "$background0" | "$background025" | "$background05" | "$background075" | "$color1" | "$color2" | "$color3" | "$color4" | "$color5" | "$color6" | "$color7" | "$color8" | "$color9" | "$color10" | "$color11" | "$color12" | "$color0" | "$color025" | "$color05" | "$color075" | "$background" | "$backgroundHover" | "$backgroundPress" | "$backgroundFocus" | "$borderColorHover" | "$borderColorPress" | "$borderColorFocus" | "$colorHover" | "$colorPress" | "$colorFocus" | "$colorTransparent" | "$placeholderColor" | "$outlineColor" | "$shadowColorHover" | "$shadowColorPress" | "$shadowColorFocus" | "$yellow1" | "$yellow2" | "$yellow3" | "$yellow4" | "$yellow5" | "$yellow6" | "$yellow7" | "$yellow8" | "$yellow9" | "$yellow10" | "$yellow11" | "$yellow12" | "$red1" | "$red2" | "$red3" | "$red4" | "$red5" | "$red6" | "$red7" | "$red8" | "$red9" | "$red10" | "$red11" | "$red12" | "$purple1" | "$purple2" | "$purple3" | "$purple4" | "$purple5" | "$purple6" | "$purple7" | "$purple8" | "$purple9" | "$purple10" | "$purple11" | "$purple12" | "$pink1" | "$pink2" | "$pink3" | "$pink4" | "$pink5" | "$pink6" | "$pink7" | "$pink8" | "$pink9" | "$pink10" | "$pink11" | "$pink12" | "$orange1" | "$orange2" | "$orange3" | "$orange4" | "$orange5" | "$orange6" | "$orange7" | "$orange8" | "$orange9" | "$orange10" | "$orange11" | "$orange12" | "$green1" | "$green2" | "$green3" | "$green4" | "$green5" | "$green6" | "$green7" | "$green8" | "$green9" | "$green10" | "$green11" | "$green12" | "$gray1" | "$gray2" | "$gray3" | "$gray4" | "$gray5" | "$gray6" | "$gray7" | "$gray8" | "$gray10" | "$gray12" | "$blue1" | "$blue2" | "$blue3" | "$blue4" | "$blue5" | "$blue6" | "$blue7" | "$blue8" | "$blue9" | "$blue10" | "$blue11" | "$blue12" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred " | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "plum" | "powderblue" | "rebeccapurple" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellowgreen" | "transparent" | (`rgba(${string})` & {}) | (`rgb(${string})` & {}) | (`hsl(${string})` & {}) | (`hsla(${string})` & {}) | (`#${string}` & {}), "unset"> | undefined;
}, {
    size?: import("tamagui").SizeTokens | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
} & import("@tamagui/web").StaticConfigPublic>;
export declare function MonthPicker({ onChange, }: {
    onChange?: (e: MouseEvent, date: Date) => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function YearPicker({ onChange, }: {
    onChange?: (e: MouseEvent, date: Date) => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function YearRangeSlider(): import("react/jsx-runtime").JSX.Element;
export declare function YearSlider(): import("react/jsx-runtime").JSX.Element;
export declare const SizableText: import("tamagui").TamaguiComponent<import("@tamagui/web").TamaDefer, import("tamagui").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: import("tamagui").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export {};
//# sourceMappingURL=dateParts.d.ts.map