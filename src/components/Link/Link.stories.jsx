import Link from './Link'

const config ={
  title:'components/Link'  
}
export  default config
const Default =()=><Link url='/test'> CLICK ME!</Link>
const Full =()=><Link url='/test' fullWidth> CLICK ME!</Link>
const Disabled =()=><Link disabled url='/test'> CLICK ME!</Link>
export{
    Default,
    Full,
    Disabled
    
};