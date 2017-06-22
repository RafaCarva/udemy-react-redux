import React from 'react'

function childrenWithProps(children, props){
    
    /**
     * o .map vaqi varrer o array e executar uma instrução
     * para cada item encontrado.
     */

     /**
      * o 1º parâmentro que esse método recebe são todos os filhos,
      o 2 ]é o callback.
      */
    return React.Children.map(props.children,
    child => React.cloneElement(child,{...props}))
}//childrenWithProps

export {childrenWithProps}

//só pode haver 1º método 'expor' default