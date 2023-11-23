"use client"

import React, { ChangeEvent, useState } from 'react';
import FileUpload from './fileupload.svg'
import test from './test.svg'
import Image from 'next/image';

const FileUploadForm: React.FC = () => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Handle file change logic if needed
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic if needed
  };

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const photoFile = event.target.files?.[0];

    if (photoFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(photoFile);
    } else {
      setPhotoPreview(null);
    }
  };

  return (
    <div className="container">

      <div>
        <form className="mt-8 space-y-3" >
          <div className="grid grid-cols-1 space-y-2">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-auto px-10 py-10 lg:py-0 group text-center">
                <div className="h-full w-full text-center flex flex-col  justify-center items-center  ">
                  <div className='xl:flex gap-3'>
                    <Image className="has-mask lg:h-36 h-auto mx-auto" src={FileUpload} alt="freepik image" />
                    <p className="pointer-none text-[#223263] mx-auto my-auto"><span className="text-xl font-bold ">Upload up to 5 images</span> <br /><span className='text-sm max-w-[10px]'>(345x255 or larger recommended, up to 1 MB each)</span> </p>
                  </div>
                </div>
                <input type="file" className="hidden" onChange={handleChange} />
              </label>
            </div>
          </div>

          <div className='xl:container my-10 '>
            <div className='xl:flex  justify-center gap-16 lg:space-y-0 space-y-4'>
              <div className='flex gap-5 justify-center'>
                <div >
                  <div className='xl:w-32 w-14 xl:h-16 h-8 rounded-md border  flex items-center  '>
                    <div className='mx-auto relative'>
                      {photoPreview ? (
                        <Image src={test} alt='' width={15} className='absolute top-0 right-0'
                          onClick={() => {
                            setPhotoPreview(null)
                          }}
                        />
                      ) : (

                        null
                      )}
                      {photoPreview ? (
                        <span
                          className="block xl:w-32 w-14 xl:h-16 h-8 rounded-md m-auto shadow"
                          style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            backgroundImage: `url('${photoPreview}')`,
                          }}
                        />
                      ) : (
                        <Image src={FileUpload} alt='File Upload' className='lg:w-16 w-6' />

                      )
                      }
                    </div>
                  </div>
                </div>
                <div >
                  <div className='xl:w-32 w-14 xl:h-16 h-8 rounded-md border   flex items-center  '>
                    <div className='mx-auto'>
                      <Image src={FileUpload} alt='File Upload' className='lg:w-16 w-6' />
                    </div>
                  </div>

                </div>
                <div >
                  <div className='xl:w-32 w-14 xl:h-16 h-8 rounded-md border   flex items-center  '>
                    <div className='mx-auto'>
                      <Image src={FileUpload} alt='File Upload' className='lg:w-16 w-6' />
                    </div>
                  </div>

                </div>
                <div >
                  <div className='xl:w-32 w-14 xl:h-16 h-8 rounded-md border   flex items-center  '>
                    <div className='mx-auto'>
                      <Image src={FileUpload} alt='File Upload' className='lg:w-16 w-6' />
                    </div>
                  </div>

                </div>
                <div >
                  <div className='xl:w-32 w-14 xl:h-16 h-8 rounded-md border   flex items-center  '>
                    <div className='mx-auto'>
                      <Image src={FileUpload} alt='File Upload' className='lg:w-16 w-6' />
                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div>
          <div className='container py-10'>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0 rounded-lg">
                <label htmlFor="grid-city" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Product Name
                </label>
                <input
                  id="grid-city"
                  type="text"
                  placeholder=" Product Name"
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0">
                <label htmlFor="grid-state" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Category
                </label>
                <div className="relative">
                  <select
                    id="grid-state"
                    className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/12 px-3 mb-6 md:mb-0">
                <label htmlFor="grid-zip" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Price*
                </label>
                <input
                  id="grid-zip"
                  type="text"
                  placeholder="xxxxx"
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full md:w-2/12 px-3 mb-6 md:mb-0">
                <label htmlFor="grid-zip" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Discounted Price
                </label>
                <input
                  id="grid-zip"
                  type="text"
                  placeholder="xxxxx"
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>




            <div className="flex flex-wrap -mx-3 mb-2 mt-7">
              <div className="w-full md:w-2/12 px-3 mb-6 md:mb-0">
                <label htmlFor="grid-zip" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Product Size
                </label>
                <input
                  id="grid-zip"
                  type="text"
                  placeholder="xxxxx"
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full md:w-2/12 px-3 mb-6 md:mb-0">

                <input
                  id="grid-zip"
                  type="text"
                  placeholder="xxxxx"
                  className="appearance-none mt-6 block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0 rounded-lg">
                <label htmlFor="grid-city" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Product Name
                </label>
                <input
                  id="grid-city"
                  type="text"
                  placeholder=" Product Name"
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
              <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0 rounded-lg">
                <label htmlFor="grid-city" className="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Product Name
                </label>
                <input
                  id="grid-city"
                  type="text"
                  placeholder=" Product Name"
                  className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>

            </div>

          </div>

        </form>
      </div>

    </div>
  );
};

export default FileUploadForm;
