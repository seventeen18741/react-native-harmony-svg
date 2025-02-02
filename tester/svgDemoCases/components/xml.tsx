import React from "react"
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SvgAst, SvgFromUri, SvgFromXml, SvgXml, Circle, SvgUri, parse, Svg, AstProps, JsxAST } from 'react-native-svg'
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
import { genAdditionalProps } from '../genUtil'
interface ItemProps {
    text: string,
    children: React.ReactNode
}

function Item({ text, children }: ItemProps) {
    return (
        <TestCase
            itShould={text}
        >
            {children}
        </TestCase>
    )
}

export default function () {
    const xmlCase = `
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">
        <circle cx="50%" cy="50%" r="40%" fill="pink" />
        </svg>
    `
    return (
        <Tester>
            <ScrollView>
                <Item
                    text="test SvgUri"
                >
                    <SvgUri
                        width="150"
                        height="70"
                        uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
                        { ...genAdditionalProps('SvgUri') }
                    />
                </Item>
                <Item
                    text="test SvgFromUri"
                >
                    <SvgFromUri
                        width="150"
                        height="70"
                        uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
                        { ...genAdditionalProps('SvgFromUri') }
                    />
                </Item>
                <Item text="test SvgXml">
                    <SvgXml xml={xmlCase} override={{ width: "100", height: "100" }} { ...genAdditionalProps('SvgXml') } />
                </Item>
                <Item text="test parse">
                    <Svg width={60} height={60}>
                        {(parse(xmlCase) as JsxAST).children}
                    </Svg>
                </Item>
                <Item text="test SvgFromXml">
                    <SvgFromXml xml={xmlCase} override={{ width: "90", height: "70" }} { ...genAdditionalProps('SvgFromXml') } />
                </Item>
                <Item text="test SvgAst">
                    <SvgAst ast={parse(xmlCase)} override={{ width: "60", height: "70" }} { ...genAdditionalProps('SvgAst') } />
                </Item>
            </ScrollView>
        </Tester>
    )
}