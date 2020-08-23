import React from 'react'

import { MarkButton, BlockButton } from '../Buttons/buttons'
import Toolbar from './toolbarLoader'

const Toolbar_Loader = () => {
    return(
        <Toolbar className={'toolbar'}>
            <MarkButton format="bold" icon="format_bold" />
            <MarkButton format="italic" icon="format_italic" />
            <MarkButton format="underline" icon="format_underlined" />
            <MarkButton format="code" icon="code" />
            <BlockButton format="heading-one" icon="looks_one" />
            <BlockButton format="heading-two" icon="looks_two" />
            <BlockButton format="block-quote" icon="format_quote" />
            <BlockButton format="numbered-list" icon="format_list_numbered" />
            <BlockButton format="bulleted-list" icon="format_list_bulleted" />
        </Toolbar>
    )
}

export default Toolbar_Loader