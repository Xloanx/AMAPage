const projects = [
    {
        id: "1",
        date: {start: "November 2024", to: "January 2025"},
        title: "Predicting Waterborne Disease Outbreaks in Tanzania (Zindi Competition)",
        role:"Applied Machine Learning Engineer",
        objective: "Developed a machine learning model to predict outbreaks of waterborne diseases such as typhoid, "+
                   "amoebiasis, and schistosomiasis. The project focused on enabling proactive interventions and "+
                   "resource allocation in vulnerable regions affected by climate-sensitive health risks.",
        tool_and_tech: ["Python","Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Seaborn", "GeoPandas"],
        code_repository: "https://github.com/xloanx/waterborne-disease-predictor",
        project_link: "https://zindi.africa/competitions/predicting-waterborne-disease-outbreaks-in-tanzania",
        key_features: [

                        "Data Integration: Combined multi-source datasets, including climate variables, water source quality, sanitation infrastructure, and healthcare accessibility.",

                        "Feature Engineering: Engineered domain-specific features such as aggregated climate metrics (e.g., rainfall trends), sanitation quality scores, and regional disease susceptibility indices.",

                        "Model Development: Implemented and optimized advanced machine learning models, including Random Forest and XGBoost, achieving a competitive Mean Absolute Error score.",

                        "Evaluation and Submission: Validated the model's robustness using cross-validation techniques and deployed predictions in a format-ready submission.",

                        "Documentation: Documented the project's process, findings, and results for transparency and collaboration."
        ],
        impact:"The model provides a critical tool for government and health organizations, enabling timely "+
            "identification of at-risk areas, improving public health resilience, and reducing disease "+
            "incidence through targeted interventions.",
        image: "/images/waterborne.png",
    },
   

]

export const getProject = () =>{
    return  projects;
}