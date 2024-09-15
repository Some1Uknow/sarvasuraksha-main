import React, { useState } from 'react';

const CreateDocument = () => {
  const [formData, setFormData] = useState({
    documentType: '',
    recipientName: '',
    dateOfIssue: '',
    remarks: '',
    documentFile: null,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage('');
    
    // Logic for submitting the new document data
    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }
    
    try {
      // Simulate an API call to issue the document and store it on blockchain
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating network request
      
      setFeedbackMessage('Document issued successfully and stored securely on the blockchain!');
    } catch (error) {
      setFeedbackMessage('An error occurred while issuing the document. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Create New Document</h1>

        {/* Feedback Message */}
        {feedbackMessage && (
          <div className={`p-4 mb-6 rounded ${feedbackMessage.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {feedbackMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <div>
            <label className="block text-gray-700">Document Type</label>
            <select
              name="documentType"
              onChange={handleChange}
              value={formData.documentType}
              className="w-full mt-2 p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Type</option>
              <option value="birthCertificate">Birth Certificate</option>
              <option value="academicTranscript">Academic Transcript</option>
              <option value="experienceCertificate">Experience Certificate</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Recipient Name</label>
            <input
              type="text"
              name="recipientName"
              value={formData.recipientName}
              onChange={handleChange}
              required
              placeholder="e.g., John Doe"
              className="w-full mt-2 p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Date of Issue</label>
            <input
              type="date"
              name="dateOfIssue"
              value={formData.dateOfIssue}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Remarks</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Optional remarks"
              className="w-full mt-2 p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700">Upload Document</label>
            <input
              type="file"
              name="documentFile"
              onChange={handleChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Issuing Document...' : 'Issue Document'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDocument;
