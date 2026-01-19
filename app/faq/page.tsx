import React from 'react';

export const metadata = {
  title: 'FAQ - BioBuntu',
  description: 'Frequently Asked Questions about BioBuntu, a VS Code extension for bioinformatics data analysis.',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto prose prose-sm sm:prose lg:prose-lg dark:prose-invert">
        <h1>Frequently Asked Questions (FAQ)</h1>

        <h2>General Questions</h2>

        <h3>What is Biobuntu?</h3>
        <p>
          A comprehensive platform for running genomic analysis pipelines with CLI, GUI, and web interfaces. Perfect for researchers, labs, and bioinformatics teams.
        </p>

        <h3>Who should use Biobuntu?</h3>
        <p>BioBuntu is ideal for:</p>
        <ul>
          <li>Bioinformaticians</li>
          <li>Data scientists</li>
          <li>Genomics researchers</li>
          <li>Computational biologists</li>
          <li>Life sciences professionals</li>
          <li>Students in bioinformatics programs</li>
        </ul>

        <h3>Is BioBuntu free?</h3>
        <p>
          Yes! BioBuntu is completely free and open-source. 
        </p>

        <h3>What is the license for BioBuntu?</h3>
        <p>
          BioBuntu is released under the MIT License. You are free to use, modify, and distribute the software for both personal and commercial purposes.
        </p>

        <hr />

        <h2>Installation and Setup</h2>

        <h3>How do I install BioBuntu?</h3>
        <p>You can install BioBuntu in several ways:</p>
        <ol>
          <li>
            <strong>From VS Code Marketplace</strong>:
            <ul>
              <li>Open VS Code</li>
              <li>Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)</li>
              <li>Search for "Bio-Data-Hub"</li>
              <li>Click Install</li>
            </ul>
          </li>
          <li>
            <strong>Using Command Palette</strong>:
            <ul>
              <li>Press Ctrl+Shift+P / Cmd+Shift+P</li>
              <li>Type `ext install Mubashir-Ali.bio-data-hub`</li>
              <li>Press Enter</li>
            </ul>
          </li>
          <li>
            <strong>Direct Link</strong>:
            <ul>
              <li>Visit <a href="https://pypi.org/project/biobuntu/">Biobuntu</a></li>
              <li>Click Install</li>
            </ul>
          </li>
        </ol>

        <h3>What are the system requirements for BioBuntu?</h3>
        <ul>
          <li><strong>RAM</strong>: Minimum 4GB (8GB recommended for large datasets)</li>
          <li><strong>Storage</strong>: 200MB available space</li>
          <li><strong>Operating System</strong>: Windows, macOS, or Linux</li>
        </ul>

        <h3>Does Biobuntu work on all platforms?</h3>
        <p>Yes! BioBuntu is compatible with:</p>
        <ul>
          <li>Windows</li>
          <li>macOS</li>
          <li>Linux (Ubuntu 18.04 and later, and other distributions)</li>
        </ul>

        <h3>How do I update BioBuntu?</h3>
        <p>
          BioBuntu updates automatically through VS Code. You can also manually update by:
        </p>
        <ol>
          <li>Going to Extensions in VS Code</li>
          <li>Searching for "Bio-Data-Hub"</li>
          <li>Clicking the Update button if available</li>
          <li>Check our <a href="https://biobuntu.github.io/release-notes">Release Notes</a> for new features</li>
        </ol>

        <hr />

        <h2>Features and Functionality</h2>

        <h3>What features does BioBuntu offer?</h3>
        <p>BioBuntu provides:</p>
        <ul>
          <li><strong>Dataset Discovery</strong>: Search and locate biological datasets</li>
          <li><strong>CSV Preview</strong>: Interactive preview of CSV files with statistics</li>
          <li><strong>Data Visualization</strong>: Create charts and graphs for data exploration</li>
          <li><strong>Metadata Generation</strong>: Automatically generate dataset metadata</li>
          <li><strong>PCA Analysis</strong>: Perform Principal Component Analysis</li>
          <li><strong>K-means Clustering</strong>: Cluster data points for pattern recognition</li>
          <li><strong>Data Export</strong>: Export results in multiple formats</li>
          <li><strong>Column Statistics</strong>: View mean, median, standard deviation, and more</li>
          <li><strong>Data Filtering</strong>: Filter and subset datasets</li>
          <li><strong>Integration</strong>: Works seamlessly within VS Code workflow</li>
        </ul>

        <h3>Can BioBuntu handle large datasets?</h3>
        <p>Yes! BioBuntu is optimized for large datasets. It includes:</p>
        <ul>
          <li>Efficient memory management</li>
          <li>Progressive data loading</li>
          <li>Streaming capabilities for huge files</li>
          <li>Optimized visualization for thousands of rows</li>
        </ul>
        <p>For optimal performance with very large files (&gt;1GB), we recommend:</p>
        <ul>
          <li>Using 8GB+ RAM</li>
          <li>Closing other applications</li>
          <li>Breaking data into chunks if possible</li>
        </ul>

        <h3>What file formats does BioBuntu support?</h3>
        <p>BioBuntu currently supports:</p>
        <ul>
          <li><strong>CSV</strong> (.csv)</li>
          <li><strong>TSV</strong> (.tsv)</li>
          <li><strong>Excel</strong> (.xlsx, .xls)</li>
          <li><strong>JSON</strong> (.json)</li>
        </ul>
        <p>More formats are coming in future releases!</p>

        <h3>How do I use PCA analysis in BioBuntu?</h3>
        <p>
          PCA (Principal Component Analysis) is a statistical technique used to reduce data dimensionality:
        </p>
        <ol>
          <li>Open your dataset in BioBuntu</li>
          <li>Select the PCA option</li>
          <li>Choose numeric columns for analysis</li>
          <li>BioBuntu will compute principal components</li>
          <li>Visualize results in 2D or 3D plots</li>
          <li>Export PCA results for further analysis</li>
        </ol>

        <h3>How do I perform K-means clustering?</h3>
        <p>K-means clustering groups similar data points together:</p>
        <ol>
          <li>Load your dataset</li>
          <li>Select the Clustering option</li>
          <li>Specify the number of clusters (K)</li>
          <li>Choose columns for clustering</li>
          <li>BioBuntu will compute cluster assignments</li>
          <li>Visualize clusters and export results</li>
        </ol>

        <hr />

        <h2>Data Management</h2>

        <h3>How do I load a dataset into BioBuntu?</h3>
        <p>
          <strong>Method 1: Drag and Drop</strong>
        </p>
        <ol>
          <li>Open the BioBuntu panel in VS Code</li>
          <li>Drag your CSV file into the panel</li>
          <li>BioBuntu will automatically load and preview it</li>
        </ol>
        <p>
          <strong>Method 2: File Browser</strong>
        </p>
        <ol>
          <li>Click the file browser icon in BioBuntu</li>
          <li>Navigate to your dataset</li>
          <li>Click to open</li>
        </ol>
        <p>
          <strong>Method 3: Command Palette</strong>
        </p>
        <ol>
          <li>Press Ctrl+Shift+P / Cmd+Shift+P</li>
          <li>Type "BioBuntu: Open Dataset"</li>
          <li>Select your file</li>
        </ol>

        <h3>Can I import data from databases?</h3>
        <p>
          Currently, BioBuntu supports importing from files. Database integration is planned for future releases. For now, you can:
        </p>
        <ul>
          <li>Export your database query to CSV</li>
          <li>Import the CSV into BioBuntu</li>
        </ul>

        <h3>How do I export data from BioBuntu?</h3>
        <p>You can export your data in multiple formats:</p>
        <ol>
          <li>Click the Export button in BioBuntu</li>
          <li>Choose your desired format (CSV, JSON, Excel, etc.)</li>
          <li>Select output location</li>
          <li>Click Export</li>
        </ol>

        <h3>Can I filter or subset my data?</h3>
        <p>Yes! BioBuntu provides filtering capabilities:</p>
        <ol>
          <li>Click the Filter option</li>
          <li>Select columns and conditions</li>
          <li>Apply filters</li>
          <li>Visualize or export filtered data</li>
        </ol>

        <h3>How do I handle missing data?</h3>
        <p>BioBuntu handles missing data by:</p>
        <ul>
          <li>Identifying missing values (NA, NaN, null)</li>
          <li>Providing visualization of missingness patterns</li>
          <li>Offering options to remove or impute missing data</li>
          <li>Excluding missing values from calculations</li>
        </ul>

        <h3>Can I edit data directly in BioBuntu?</h3>
        <p>
          Currently, BioBuntu is designed for visualization and analysis. Direct editing is not available in the current version. For data editing:
        </p>
        <ol>
          <li>Use the original CSV file or spreadsheet editor</li>
          <li>Save changes</li>
          <li>Reload in BioBuntu</li>
        </ol>

        <hr />

        <h2>Visualization and Analysis</h2>

        <h3>What visualization types are available?</h3>
        <p>BioBuntu supports:</p>
        <ul>
          <li>Scatter plots</li>
          <li>Line charts</li>
          <li>Bar charts</li>
          <li>Histograms</li>
          <li>Heatmaps</li>
          <li>Box plots</li>
          <li>Violin plots</li>
          <li>Density plots</li>
          <li>3D visualizations</li>
        </ul>

        <h3>Can I customize chart appearance?</h3>
        <p>Yes! You can customize:</p>
        <ul>
          <li>Colors and color schemes</li>
          <li>Axis labels and titles</li>
          <li>Legend position and format</li>
          <li>Chart size and resolution</li>
          <li>Font sizes and styles</li>
          <li>Data point sizes</li>
        </ul>

        <h3>How do I save visualizations?</h3>
        <p>You can export visualizations as:</p>
        <ul>
          <li>PNG images</li>
          <li>SVG (vector format)</li>
          <li>PDF documents</li>
          <li>Interactive HTML files</li>
        </ul>

        <h3>What statistical analyses are available?</h3>
        <p>BioBuntu provides:</p>
        <ul>
          <li>Descriptive statistics (mean, median, std dev, etc.)</li>
          <li>Correlation analysis</li>
          <li>Principal Component Analysis (PCA)</li>
          <li>K-means clustering</li>
          <li>More analyses coming soon</li>
        </ul>

        <hr />

        <h2>Performance and Optimization</h2>

        <h3>Why is BioBuntu running slowly?</h3>
        <p>Performance can be affected by:</p>
        <ul>
          <li>Large dataset size</li>
          <li>Limited system RAM</li>
          <li>Other applications running simultaneously</li>
          <li>Complex visualizations</li>
        </ul>
        <p>
          <strong>Solutions</strong>:
        </p>
        <ol>
          <li>Close unnecessary applications</li>
          <li>Increase available RAM</li>
          <li>Break large files into smaller chunks</li>
          <li>Use filtering to work with subsets</li>
          <li>Simplify visualizations</li>
        </ol>

        <h3>How do I improve performance with large files?</h3>
        <ol>
          <li><strong>Use filtering</strong>: Work with relevant columns only</li>
          <li><strong>Subset data</strong>: Analyze smaller time periods or samples</li>
          <li><strong>Upgrade RAM</strong>: More memory improves performance</li>
          <li><strong>Close other apps</strong>: Free up system resources</li>
          <li><strong>Update VS Code</strong>: Ensure you're on the latest version</li>
        </ol>

        <h3>Does BioBuntu cache data?</h3>
        <p>
          Yes, BioBuntu implements intelligent caching for performance optimization. Cached data is stored locally and automatically invalidated when needed.
        </p>

        <hr />

        <h2>Troubleshooting</h2>

        <h3>BioBuntu is not appearing in my VS Code sidebar</h3>
        <p>
          <strong>Solutions</strong>:
        </p>
        <ol>
          <li>Ensure BioBuntu is installed: Extensions → search "Bio-Data-Hub"</li>
          <li>Reload VS Code: Ctrl+R / Cmd+R</li>
          <li>Check if the extension is enabled</li>
          <li>Try reinstalling the extension</li>
        </ol>

        <h3>I'm getting an error when importing a file</h3>
        <p>
          <strong>Common causes and solutions</strong>:
        </p>
        <ul>
          <li><strong>File format not supported</strong>: Ensure file is CSV, TSV, Excel, or JSON</li>
          <li><strong>File encoding issue</strong>: Re-save file as UTF-8</li>
          <li><strong>Corrupted file</strong>: Try opening in spreadsheet editor first</li>
          <li><strong>Large file</strong>: Break into smaller chunks</li>
        </ul>

        <h3>Visualizations are not displaying correctly</h3>
        <p>
          <strong>Try</strong>:
        </p>
        <ol>
          <li>Refresh the view (F5)</li>
          <li>Clear browser cache</li>
          <li>Restart VS Code</li>
          <li>Check if you're using a supported browser</li>
          <li>Update BioBuntu to the latest version</li>
        </ol>

        <h3>I can't export my data</h3>
        <p>
          <strong>Check</strong>:
        </p>
        <ol>
          <li>File permissions: Ensure write access to output directory</li>
          <li>Disk space: Ensure sufficient storage available</li>
          <li>File format compatibility</li>
          <li>File paths don't exceed system limits</li>
        </ol>

        <h3>BioBuntu crashed or stopped responding</h3>
        <p>
          <strong>Recovery steps</strong>:
        </p>
        <ol>
          <li>Close VS Code completely</li>
          <li>Reopen VS Code</li>
          <li>Reload the BioBuntu extension</li>
          <li>Try with a smaller dataset first</li>
          <li>Check your system RAM usage</li>
        </ol>

        <hr />

        <h2>Advanced Questions</h2>

        <h3>How do I report bugs or issues?</h3>
        <p>
          Report bugs on our <a href="https://github.com/biobuntu/biobuntu/issues">GitHub Issues page</a>:
        </p>
        <ol>
          <li>Click "New Issue"</li>
          <li>Describe the problem clearly</li>
          <li>Include reproduction steps</li>
          <li>Attach screenshots or sample data if relevant</li>
          <li>Include your system information</li>
        </ol>

        <h3>How do I request new features?</h3>
        <p>
          We love feature requests! Submit them on our <a href="https://github.com/biobuntu/biobuntu/issues">GitHub Issues page</a>:
        </p>
        <ol>
          <li>Click "New Issue"</li>
          <li>Select "Feature request" template</li>
          <li>Describe your desired feature</li>
          <li>Explain the use case</li>
          <li>Suggest implementation if possible</li>
        </ol>

        <h3>Can I contribute to BioBuntu?</h3>
        <p>Yes! We welcome contributions:</p>
        <ol>
          <li>Fork the <a href="https://github.com/biobuntu/biobuntu">GitHub repository</a></li>
          <li>Create a feature branch</li>
          <li>Make your improvements</li>
          <li>Submit a pull request</li>
          <li>Our team will review and merge</li>
        </ol>

        <h3>How do I stay updated on BioBuntu?</h3>
        <p>Follow us on:</p>
        <ul>
          <li><a href="https://github.com/Code-with-Bismillah">GitHub</a></li>
          <li><a href="https://www.youtube.com/@CodeWithBismillah">YouTube</a></li>
          <li><a href="https://x.com/CWB_Online">Twitter/X</a></li>
          <li><a href="https://mubashir1837.substack.com/">Newsletter</a></li>
        </ul>

        <h3>Are there tutorials available?</h3>
        <p>Yes! Check out:</p>
        <ul>
          <li><a href="https://biobuntu.github.io/docs">Official Documentation</a></li>
          <li><a href="https://www.youtube.com/@CodeWithBismillah">YouTube Tutorials</a></li>
          <li><a href="https://dev.to/code-with-bismillah">Blog Posts</a></li>
          <li><a href="https://biobuntu.github.io/community">Community Forums</a></li>
        </ul>

        <hr />

        <h2>Legal and Support</h2>

        <h3>What is the privacy policy?</h3>
        <p>
          Read our detailed <a href="/privacy.md">Privacy Policy</a> to understand how we handle your data.
        </p>

        <h3>What are the terms of service?</h3>
        <p>
          Review our <a href="/terms.md">Terms of Service</a> for usage guidelines and legal information.
        </p>

        <h3>How do I contact support?</h3>
        <p>
          <strong>Email</strong>: mubashirali1837@gmail.com
          <br />
          <strong>Response time</strong>: Usually within 24-48 hours
        </p>
        <p>
          <strong>Social Media</strong>:
        </p>
        <ul>
          <li>Twitter: <a href="https://x.com/biobuntu">@CWB_Online</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/company/biobuntu/">Biobuntu</a></li>
          <li>GitHub: <a href="https://github.com/biobuntu.github.io">@biobuntu</a></li>
        </ul>

        <h3>Is there a community forum?</h3>
        <p>Yes! Join our community at:</p>
        <ul>
          <li><a href="https://github.com/biobuntu/biobuntu/discussions">GitHub Discussions</a></li>
          <li><a href="https://biobuntu.github.io/community">Community Page</a></li>
        </ul>

        <h3>How do I submit feedback?</h3>
        <p>We value your feedback! Send it to:</p>
        <ul>
          <li>Email: mubashirali1837@gmail.com</li>
          <li>GitHub Issues: <a href="https://github.com/biobuntu/biobuntu/issues">Feature Requests</a></li>
          <li>Community Page: https://biobuntu.github.io/community</li>
        </ul>

        <hr />

        <h2>Additional Resources</h2>
        <ul>
          <li><strong>Website</strong>: https://biobuntu.github.io</li>
          <li><strong>GitHub</strong>: https://github.com/biobuntu</li>
          <li><strong>VS Code Marketplace</strong>: https://pypi.org/project/biobuntu/</li>
          <li><strong>Documentation</strong>: https://biobuntu.github.io/docs</li>
        </ul>

        <hr />

        <p>
          <strong>Can't find your answer?</strong> Feel free to reach out to us directly!
        </p>
      </div>
    </main>
  );
}
