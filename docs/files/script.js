const DOWNLOAD_URL = "https://raw.githubusercontent.com/samiulalim1/sql-backup/refs/heads/main/src/installer/main.php";

const btn = document.getElementById("downloadBtn");
const btnText = btn.querySelector(".btn-text");

async function downloadInstaller() {
	btn.disabled = true;
	btn.innerHTML = '<div class="spinner-border spinner-border-sm me-2" role="status"></div>Downloading...';

	try {
		const res = await fetch(DOWNLOAD_URL, {
			cache: "no-store"
		});
		if (!res.ok) throw new Error();
		const blob = await res.blob();
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "sql-backup.php";
		document.body.appendChild(a);
		a.click();
		a.remove();
		URL.revokeObjectURL(url);
	} catch (e) {
		alert("Download failed. Please check the link.");
	}
	
	btn.disabled = false;
	btn.innerHTML = '<i class="bi bi-download me-2"></i><span class="btn-text">Download <strong>sql-backup.php</strong></span>';
}

btn.addEventListener("click", downloadInstaller);
document.getElementById("year").textContent = new Date().getFullYear();

