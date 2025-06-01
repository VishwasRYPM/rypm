import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../slices/modalSlice';
import { ChevronLeft, X, ChevronDown } from 'lucide-react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface RentalPreferenceValues {
  priceMin: number;
  priceMax: number;
  bedrooms: string;
  bathrooms: string;
  moveInDate: string;
  propertyType: string;
  parking: string;
  furnished: string;
  location: string;
  unitAmenities: { count: number };
  buildingAmenities: { count: number };
}

// Validation schema
const RentalPreferencesSchema = Yup.object().shape({
  priceMin: Yup.number().required('Required').min(0, 'Must be positive'),
  priceMax: Yup.number().required('Required').min(0, 'Must be positive')
    .test('is-greater', 'Max price must be greater than min price', 
      function(value) {
        return !value || !this.parent.priceMin || value > this.parent.priceMin;
      }),
  bedrooms: Yup.string().required('Required'),
  bathrooms: Yup.string().required('Required'),
  moveInDate: Yup.string().required('Required'),
  propertyType: Yup.string().required('Required'),
  parking: Yup.string().required('Required'),
  furnished: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  unitAmenities: Yup.object().shape({
    count: Yup.number().required('Required')
  }),
  buildingAmenities: Yup.object().shape({
    count: Yup.number().required('Required')
  })
});

const FilterSettingsModal: React.FC = () => {
  const dispatch = useDispatch();
  const bedroomOptions = ["Studio+", "1+", "2+", "3+", "4+", "5+"];
  const bathroomOptions = ["Studio+", "1+", "2+", "3+", "4+", "5+"];
  
  const initialValues: RentalPreferenceValues = {
    priceMin: 1500,
    priceMax: 3500,
    bedrooms: "2+",
    bathrooms: "2+",
    moveInDate: "15/05/2024",
    propertyType: "Multi Family",
    parking: "Yes",
    furnished: "Yes",
    location: "Toronto",
    unitAmenities: { count: 12 },
    buildingAmenities: { count: 5 }
  };

  const handleSubmit = (
    values: RentalPreferenceValues, 
    { setSubmitting }: FormikHelpers<RentalPreferenceValues>
  ) => {
    setSubmitting(false);
    dispatch(closeModal());
  };

  return (
    <div className="bg-white rounded-lg w-full max-w-md max-h-screen overflow-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={RentalPreferencesSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="flex flex-col bg-gray-50 h-full w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <button type="button" onClick={() => dispatch(closeModal())}>
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <h1 className="text-lg font-medium text-gray-800">Rental Preferences</h1>
              <button type="button" onClick={() => dispatch(closeModal())}>
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex flex-col p-4 space-y-6">
              {/* Price Range */}
              <div className="space-y-2">
                <p className="text-gray-800 font-medium">Price</p>
                <div className="flex items-center justify-between">
                  <div className="bg-white rounded-lg border border-gray-200 px-3 py-2 w-24 text-center">
                    ${values.priceMin.toLocaleString()}
                  </div>
                  <span className="text-gray-500 px-2">to</span>
                  <div className="bg-white rounded-lg border border-gray-200 px-3 py-2 w-24 text-center">
                    ${values.priceMax.toLocaleString()}
                  </div>
                </div>
                <div className="relative pt-4 pb-2">
                  <div className="h-1 bg-gray-300 rounded-full">
                    <div className="absolute h-1 bg-blue-800 rounded-full" style={{width: '50%', left: '20%'}}></div>
                    <div className="absolute w-4 h-4 bg-gray-700 rounded-full -mt-1.5 -ml-2" style={{left: '20%'}}></div>
                    <div className="absolute w-4 h-4 bg-gray-700 rounded-full -mt-1.5 -ml-2" style={{left: '70%'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Bedrooms */}
              <div className="space-y-2">
                <p className="text-gray-800 font-medium">Bedrooms</p>
                <div className="flex space-x-2">
                  {bedroomOptions.map(option => (
                    <button
                      type="button"
                      key={option}
                      className={`px-3 py-2 rounded-lg text-sm flex-1 ${
                        values.bedrooms === option ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-800'
                      }`}
                      onClick={() => setFieldValue('bedrooms', option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Bathrooms */}
              <div className="space-y-2">
                <p className="text-gray-800 font-medium">Bathrooms</p>
                <div className="flex space-x-2">
                  {bathroomOptions.map(option => (
                    <button
                      type="button"
                      key={option}
                      className={`px-3 py-2 rounded-lg text-sm flex-1 ${
                        values.bathrooms === option ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-800'
                      }`}
                      onClick={() => setFieldValue('bathrooms', option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Move-In Date */}
              <div className="space-y-2">
                <p className="text-gray-800 font-medium">Move-In Date</p>
                <div className="bg-blue-100 rounded-lg p-3 flex justify-end">
                  <span className="text-gray-800">{values.moveInDate}</span>
                </div>
              </div>
              
              {/* Property Type */}
              <div className="space-y-2">
                <p className="text-gray-800 font-medium">Property Type</p>
                <div className="bg-blue-100 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-gray-800">{values.propertyType}</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              
              {/* Parking */}
              <div className="space-y-2">
                <p className="text-gray-800 font-medium">Parking</p>
                <div className="bg-blue-100 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-gray-800">{values.parking}</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              
              {/* Furnished */}
              <div className="space-y-2">
                <p className="text-gray-800 font-medium">Furnished</p>
                <div className="bg-blue-100 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-gray-800">{values.furnished}</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              
              {/* Location */}
              <div className="space-y-2">
                <p className="text-gray-800 font-medium">Location</p>
                <div className="bg-blue-100 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-gray-800">{values.location}</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              
              {/* Unit Amenities */}
              <div className="space-y-2">
                <p className="text-gray-800 font-medium">Unit Amenities</p>
                <div className="bg-blue-100 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-gray-800">{values.unitAmenities.count} Selected</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              
              {/* Building Amenities */}
              <div className="space-y-2">
                <p className="text-gray-800 font-medium">Building Amenities</p>
                <div className="bg-blue-100 rounded-lg p-3 flex justify-between items-center">
                  <span className="text-gray-800">{values.buildingAmenities.count} Selected</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
            
            {/* Promotional Banner */}
            <div className="mx-4 mt-4 bg-blue-100 rounded-lg p-4 flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                  <span role="img" aria-label="house">🏠</span>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-800">Stay on top of your rentals!</p>
                <p className="text-sm text-gray-600">Click here to track applications, move-ins, and more!</p>
              </div>
            </div>
            
            {/* Save Button */}
            <div className="px-4 pt-4 pb-6 mt-auto">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium"
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterSettingsModal;
