import slugify from 'slugify';
import {Post} from '../models/index.js';
export async function uniqueSlug(title,excludeId){let base=slugify(title,{lower:true,strict:true})||'article',slug=base,n=2;while(await Post.exists({_id:{$ne:excludeId||null},slug}))slug=`${base}-${n++}`;return slug;}
