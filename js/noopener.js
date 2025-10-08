  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    const linkHost = new URL(link.href).hostname;
    const currentHost = window.location.hostname;

    // Se o link for externo (host diferente), aplica rel seguro
    if (linkHost !== currentHost) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

