import React from "react";
// import  from 'react-native-svg'
import { Svg, Circle, Rect } from 'react-native-svg'
import { GenMain } from './gen'
import { genTransformProps, genStrokeProps, genFillProps } from '../genUtil'
const basicProps = {
}

const allCases = [
    ...genFillProps(),
    ...genStrokeProps(),
    ...genTransformProps()
]

const COMChildren = function () {
    return (
        <Rect
            x="60"
            y="20"
            height="50"
            width="80"
            // stroke="#060"
            // strokeWidth="1"
            // fill="#060"
          />
    )
}

export default function () {
    return <GenMain
                cases={allCases}
                basicProps={basicProps}
                comName='G'
                renderComChildren={<COMChildren />}
            >
            </GenMain>
}