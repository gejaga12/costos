import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaMobileAlt, FaGlobe } from 'react-icons/fa';

export default function ProviderCard({ empresa, info }) {
  return (
    <div className="bg-gray-300 shadow-lg rounded-lg p-3">
      <h3 className="text-base p-1.5 rounded-t-lg font-bold bg-red-600">{empresa}</h3>
      
      {info.descripcion && <p className="text-gray-700 py-2 px-1.5 font-normal bg-slate-50">{info.descripcion}</p>}

      <div className="space-y-2 bg-slate-50 p-1.5 py-2 rounded-b-lg">
        {info.direccion && (
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2" />
            <span>{info.direccion}</span>
          </div>
        )}
        {info.tel && info.tel.length > 0 && (
          <div className="flex items-center text-gray-600">
            <FaPhone className="mr-2" />
            <span>{info.tel.join(' / ')}</span>
          </div>
        )}
        {info.cel && info.cel.length > 0 && (
          <div className="flex items-center text-gray-600">
            <FaMobileAlt className="mr-2" />
            <span>{info.cel.join(' / ')}</span>
          </div>
        )}
        {info.correo && (
          <div className="flex items-center text-gray-600">
            <FaEnvelope className="mr-2" />
            <span>{Array.isArray(info.correo) ? info.correo.join(' / ') : info.correo}</span>
          </div>
        )}
        {info.web && (
          <div className="flex items-center text-gray-600">
            <FaGlobe className="mr-2" />
            <span>{info.web}</span>
          </div>
        )}
      </div>
    </div>
  );
}
