import Header from '@src/components/shared/Header';
import TransformationForm from '@src/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@src/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const  user  = currentUser();
  const transformation = transformationTypes[type];

  if(!user) redirect('/sign-in')

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
    
      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={user?.id as string}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage